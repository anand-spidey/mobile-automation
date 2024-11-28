Feature: Login functionality

  Scenario: User logs in with valid "STANDARD" user
    Given I launch the mobile application
    Then I Navigate to login page
    When I login using "STANDARD" user with Username and Password
    Then login should sucessful and redirect to homepage

  Scenario Outline: User logs in with invalid "<userType>" user
    Given I launch the mobile application
    Then I Navigate to login page
    When I login using "<userType>" user with Username and Password
    Then login should not sucessful with error msg for "<userType>"
    Examples:
      | userType        |
      | LOCKED          |
      | NO_MATCH        |
      | NO_USER_DETAILS |
      | NO_PASSWORD     |
