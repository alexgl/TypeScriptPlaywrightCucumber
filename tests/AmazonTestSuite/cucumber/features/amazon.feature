Feature: Amazon Product Search Example

    Background: Get to Amazon and login
        Given I land on Amazon Homepage
        Given I log into Amazon Homepage
        # Given Use Amazon User Cookie

    @books
    Scenario Outline: Search Amazon for Books, Electronics and Fashion
        Given I click on Today's Deals
        When I select '<primeProgram>' in Prime Program Filter
        When I select '<department>' in Deparments Filter
        When I select '<price>' in Price Filter
        Then I should see '<product>' in Results

        Examples:
        | primeProgram | department | price | product |
        | prime | books | priceUnder25 | Weyward: A Novel+Daisy Jones & The Six: A Novel+My Book About Me |
        | prime | books | price25to50 | NRSVue, Holy Bible with Apocrypha, Leathersoft, Brown, Comfort Print+KJV, Thompson Chain-Reference Bible, Handy Size, Leathersoft, Brown, Red Letter |
        | prime | books | price50to100 | Gravitational Waves: Volume 2: Astrophysics and Cosmology+Managing Enterprise Projects: Using Project Online and Microsoft Project Server 2019 |
        # | prime | electronics | priceUnder25 | dalofthedaygoeshere |
        # | prime | electronics | price25to50 | dalofthedaygoeshere |
        # | prime | electronics | price50to100 | dalofthedaygoeshere |
        # | prime | fashion | priceUnder25 | dalofthedaygoeshere |
        # | prime | fashion | price25to50 | dalofthedaygoeshere |
        # | prime | fashion | price50to100 | dalofthedaygoeshere |
        # | early | fashion | priceUnder25 | dalofthedaygoeshere |
        # | early | fashion | price25to50 | dalofthedaygoeshere |
        # | early | fashion | price50to100 | dalofthedaygoeshere |
        # | early | books | priceUnder25 | dalofthedaygoeshere |
        # | early | books | price25to50 | dalofthedaygoeshere |
        # | early | books | price50to100 | dalofthedaygoeshere |
        # | early | electronics | priceUnder25 | dalofthedaygoeshere |
        # | early | electronics | price25to50 | dalofthedaygoeshere |
        # | early | electronics | price50to100 | dalofthedaygoeshere |
        # | exclusive | fashion | priceUnder25 | dalofthedaygoeshere |
        # | exclusive | fashion | price25to50 | dalofthedaygoeshere |
        # | exclusive | fashion | price50to100 | dalofthedaygoeshere |
        # | exclusive | books | priceUnder25 | dalofthedaygoeshere |
        # | exclusive | books | price25to50 | dalofthedaygoeshere |
        # | exclusive | books | price50to100 | dalofthedaygoeshere |
        # | exclusive | electronics | priceUnder25 | dalofthedaygoeshere |
        # | exclusive | electronics | price25to50 | dalofthedaygoeshere |
        # | exclusive | electronics | price50to100 | dalofthedaygoeshere |


