Feature: Examples

    @encryption
    Scenario: Encrypt login details
        Given I encrypt 'user' field with value 'username'
        Given I encrypt 'password' field with value 'password'
        
        

    @pause
    Scenario: Pause
        Given Pause
        Given Pause for '60' seconds
