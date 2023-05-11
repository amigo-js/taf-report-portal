Feature: As a register user I want to login into Report Portal

    Scenario: Login as a private user
    Given I login as default user
    Then Verify success popup message
    And url content

    Scenario: As a user, I want to verify header values on Launches screen
        Then column headers equals to values
         | name                                                                                         |
         | NAME START TIME TOTAL PASSED FAILED SKIPPED PRODUCT BUG AUTO BUG SYSTEM ISSUE TO INVESTIGATE |

