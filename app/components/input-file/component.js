import Ember from 'ember';

export default Ember.TextField.extend({

	attributeBindings: ['type', 'accept'],

	type: 'file',

	accept: '*.txt',

	change() {
		this.send('upload', this.$().get(0).files[0]);
	},

	actions: {
		upload(file) {
			if (FileReader) {
				var reader = new FileReader();

				reader.onload = (e) => {
					this.sendAction('onUpload', e.currentTarget.result);
				};
				reader.readAsText(file);
			} else {
				Ember.Logger.error('The File APIs are not supported by your browser.');
			}
		}
	}
});
