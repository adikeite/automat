import Ember from 'ember';

export default Ember.TextField.extend({

	attributeBindings: ['type', 'accept', 'multiple'],

	type: 'file',

	accept: '*.txt|*.md',

	multiple: 'multiple',

	change() {
		this.send('upload', this.$().get(0).files);
	},

	actions: {
		upload(files) {
			if (!FileReader) {
				Ember.Logger.error('The File APIs are not supported by your browser.');
			}
			let promises = [];

			for (let i = 0; i < files.length; i++) {
				promises[i] = new Promise((success) => {
					let reader = new FileReader();
					reader.onload = (e) => {
						success(e.currentTarget.result);
					};
					reader.readAsText(files[i]);
				});
			}
			Ember.RSVP.all(promises).then(data => {
				this.sendAction('onUpload', data.join('\n'));
			});
		}
	}
});
