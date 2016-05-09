# automat
Automatization of manual tests

##I want to know
* what was tested
* when it was tested
* who did the tests
* the result of tests

##What is important
* easy enter tests
* different projects
* markdown support
* import of .md files  

# Entities
## Test template
- Product name (version)
- state (only one active template for project)
- list of test cases (import from markdown)
- Test suite name
- Test case name

| Product name | Superadmin |
|--------------|------------|
| Test suite  | **New items** |
| State| **Active** |

List items:

|Test suite|Test case| description|
|---------|------------| ---- |
|User managements| Login| bla blabla |
|User managements| Logout| bla blabla |
| Items |**Create new group**| bla blabla |



## Test record (instance of template)
- list test cases results (name, date result)
- UI should be something like wizard

## List of template items

## List of test records (dashboard)
- grouped by test suites

|	| 2016-01-15 | 2016-01-14 | 2016-01-13|
|---|------------|------------|-----------|
|Login | OK| OK| failed |
|Logout | OK| OK| failed |
|Creating new item | OK| OK| failed |
-------------------------------

## Enter new test

**Test Suite:** Group  
**Test Case:** Create New Group  
**Prerequisities:**
* User must be logged in.  
* User must be able to create item.

**Steps:**
* Step 1
* Step 2
* Step 3
