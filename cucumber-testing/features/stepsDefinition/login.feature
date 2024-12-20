Feature: register Functionality

Scenario: Sucessful register with valid credentials
    Given I navigate to the register page
    When I enter valid email and password
    And I click on the register button for success
    Then I should be redirected to home page

# Scenario: Unsuccessful register with invalid credentials
#     Given I navigate to the register page
#     When I enter invalid email
#     And I click on the register button for failure
#     Then I should see an error message tells invalid credentials

Scenario: Invalid form input prevents submission
    Given I navigate to the register page
    When I enter invalid email and password
    Then The submit button should not be available

