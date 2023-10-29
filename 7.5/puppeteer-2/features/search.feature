Feature: Booking tickets
    Scenario: One ticket //1 сценарий
        Given1 user is on the booking page
        When1 user chooses a ticket
        Then1 the booking button for single ticket should be enabled

		  Scenario: Booking multiple tickets // 2 сценарий
        Given2 user is on the booking page
        When2 user chooses multiple tickets
        Then2 the booking button should be enabled


    Scenario: booking an already booked ticket //3 сценарий
        Given3 user is on the booking page
        When3 user chooses a booked ticket
        Then3 the booking button should be disabled