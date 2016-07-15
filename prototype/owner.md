# Superadmin
## Owner
### Create Owner

#### Prerequisities
* User must be logged in.  
* User must be able to create new item.  
* Email has to be unique.  
* Email has to be in format "test@test.com".  
* Alias has to be one word.  

#### Steps
* Click on New
* Click on Owner
* Fill in "alias" into the field Alias
* Fill in "first name" into the field First name
* Fill in "last name" into the filed Last name
* Fill in "email" into the field Email
* Fill in "company" into the field "Company"
* Fill in "phone" into the field "Phone"
* Fill in "New password" into the field "New password"
* Fill in "password" into the field "Retype"
* Click on Save
* Verify button Save is not active
---
# Superadmin
## Owner
### Search for Owner

#### Prerequisities
* User must be logged in.  
* At least 1 owner has to exist.  
* Owner has to be enabled.  

#### Steps
* Click on button Owner
* Verify the list of all owners is visible
* Verify "type:owner" value is in the search field
* Click on one of the owners
* Verify detailed view of the owner is opened
* Verify the fields are not empty
* Verify there are 5 buttons visible: Keys, Groups, Roles, Save, Remove
---
# Superadmin
## Owner
### Edit Owner

#### Prerequisities
* User must be logged in.  
* At least 1 owner has to exist.  
* Owner has to be enabled.  
* Detailed view of the owner has to be opened.  

#### Steps
* Verify button Save in inactive
* Edit some of the fields
* Verify button Save is active
* Click on Save
* Close the detailed view
* Open detailed view for the same owner
* Verify changes are saved
---
# Superadmin
## Owner
### Disable Owner

#### Prerequisities
* User must be logged in.  
* At least 1 owner has to exist.  
* Owner has to be enabled.  
* Detailed view of the owner has to be opened.  

#### Steps
* Verify owner is enabled (toggle button is on)
* Disable owner (toggle button is off)
* Verify button Save is active
* Click on Save
* Close the detailed view
* Close the list of owners
* Click on State: disabled
* Type the name of the disabled owner to the search field
* Verify owner is on the list of disabled items
---
# Superadmin
## Owner
### Enable Owner

#### Prerequisities
* User must be logged in.  
* At least 1 owner has to exist.  
* Owner has to be disabled.  
* Detailed view of the owner has to be opened.  

#### Steps
* Verify owner is disabled (toggle button is off)
* Enable owner (toggle button is on)
* Verify button Save is active
* Click on Save
* Close the detailed view
* Close the list of owners
* Click on State: enabled
* Type the name of the enabled owner to the search field
* Verify owner is on the list of enabled items
---
# Superadmin
## Owner
### Remove Owner

#### Prerequisities
* User must be logged in.  
* At least 1 owner has to exist.  
* Owner has to be enabled.  
* Detailed view of the owner has to be opened.  

#### Steps
* Verify button Remove is active and the lock symbol is visible
* Click on Remove
* Verify lock symbol has disappeared
* Wait for 2 seconds
* Verify lock symbol is displayed again
* Click on Remove
* Verify lock symbol has disappeared
* Click on Remove again
* Verify Remove button has disappeared and Restore button is now visible and active
* Verify owner is disabled (toggle button is off)
* Close the detailed view
* Clise the list of owners
* Click on State: deleted
* Type the name of the deleted owner to the search field
* Verify owner is on the list of deleted items
* Click on button Owner
* Type the name of the deleted owner to the search field
* Verify owner is not on the list of owners
---
# Superadmin
## Owner
### Restore Owner

#### Prerequisities
* User must be logged in.  
* At least 1 owner has to be removed.  
* Detailed view of the removed owner has to be opened.  

#### Steps
* Verify button Restore is active
* Click on button Restore
* Verify Restore button has disappeared and Remove button is now visible and active (lock symbol is present)
* Close the detailed view
* Close the list of deleted items
* Click on State: deleted
* Type the name of the restored owner to the search field
* Verify owner is not on the list of deleted items
* Click on button Owner
* Type the name of the restored owner to the search field
* Verify owner is on the list of owners
* Click on owner
* Verify detailed view is opened
* Verify button Remove is visible and active (lock symbol is present)
* Verify toggle button "User enabled" is off
