@checkout
Feature: Checkout
In order to Place Orders
As Guest and Registered User
I want Checkout Feature

Background:
	Given User added products to shopping bag
	And User is in shopping bag page
	When User click continue checkout button
	Then Sign in page should load

@Guest
Scenario: Checkout as Guest User

	When User entered email "ssta123@gmail.com"
	And Click Begin Checkout
	Then Checkout page should be displayed
	Given User entered mandatory Shipping Details
	|	Key	|	value	|
	|	userflag	|	Guest	|
	|	firstname	|	Xavier	|
	|	lastname	|	Zion	|
	|	address	|	600 Alexander Rd Ste 9	|
	|	city	|	Princeton	|
	|	state	|	New Jersey	|
	|	zip	|	08540	|
	|	country	|	United States	|
	|	phonenumber	|	(609) 662 4040	|
	|	email	|	ssta123@gmail.com	|
	And Select Pay By Phone and Use my shipping address as my billing address options
	And Continue checkout without entering an account
	Then Check limited changes options should load
		
Scenario: Checkout as Registered User
	
	When User entered
	|	Key	|	value	|
	|	userflag	|	Registered	|
	|	username	|	testautomationdemo@gmail.com	|
	|	password	|	automation	|
	And Click on SignIn button
	Then Checkout page should be displayed
	Given User entered mandatory Shipping Details
	|	Key	|	value	|
	|	firstname	|	Xavier	|
	|	lastname	|	Zion	|
	|	address	|	600 Alexander Rd Ste 9	|
	|	city	|	Princeton	|
	|	state	|	New Jersey	|
	|	zip	|	08540	|
	|	country	|	United States	|
	|	phonenumber	|	(609) 662 4040	|
	Then Check limited changes options should load
	

