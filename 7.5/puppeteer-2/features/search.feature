Feature: Booking tickets
    Scenario: One ticket //1 сценарий
        Given user is on the booking page
        When user chooses a ticket
        Then the booking button for single ticket should be enabled

		  Scenario: Booking multiple tickets // 2 сценарий
        Given user is on the booking page
        When user chooses multiple tickets
        Then the booking button should be enabled


    Scenario: booking an already booked ticket //3 сценарий
        Given user is on the booking page
        When user chooses a booked ticket
        Then the booking button should be disabled