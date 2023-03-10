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
        | prime | books | priceUnder25 | Birnam Wood: A Novel+Trust+How to Haunt a House+The Spear Cuts Through Water: A Novel |
        # | prime | books | price25to50 | NRSVue, Holy Bible with Apocrypha, Leathersoft ,Brown, Comfort Print+KJV, Thompson Chain-Reference Bible, Handy Size, Leathersoft, Brown, Red Letter |
        # | prime | books | price50to100 | Gravitational Waves: Volume 2: Astrophysics and Cosmology+Managing Enterprise Projects: Using Project Online and Microsoft Project Server 2019 |
        # | prime | electronics | priceUnder25 | Deal of the day products go here, change every 15 minutes or so! |
        # | prime | electronics | price25to50 | Deal of the day products go here, change every 15 minutes or so! |
        # | prime | electronics | price50to100 | Deal of the day products go here, change every 15 minutes or so! |
        # | prime | fashion | priceUnder25 | Deal of the day products go here, change every 15 minutes or so! |
        # | prime | fashion | price25to50 | Deal of the day products go here, change every 15 minutes or so! |
        # | prime | fashion | price50to100 | Deal of the day products go here, change every 15 minutes or so! |
        # | early | fashion | priceUnder25 | Deal of the day products go here, change every 15 minutes or so! |
        # | early | fashion | price25to50 | Deal of the day products go here, change every 15 minutes or so! |
        # | early | fashion | price50to100 | Deal of the day products go here, change every 15 minutes or so! |
        # | early | books | priceUnder25 | Deal of the day products go here, change every 15 minutes or so! |
        # | early | books | price25to50 | Deal of the day products go here, change every 15 minutes or so! |
        # | early | books | price50to100 | Deal of the day products go here, change every 15 minutes or so! |
        # | early | electronics | priceUnder25 | Deal of the day products go here, change every 15 minutes or so! |
        # | early | electronics | price25to50 | Deal of the day products go here, change every 15 minutes or so! |
        # | early | electronics | price50to100 | Deal of the day products go here, change every 15 minutes or so! |
        # | exclusive | fashion | priceUnder25 | Deal of the day products go here, change every 15 minutes or so! |
        # | exclusive | fashion | price25to50 | Deal of the day products go here, change every 15 minutes or so! |
        # | exclusive | fashion | price50to100 | Deal of the day products go here, change every 15 minutes or so! |
        # | exclusive | books | priceUnder25 | Deal of the day products go here, change every 15 minutes or so! |
        # | exclusive | books | price25to50 | Deal of the day products go here, change every 15 minutes or so! |
        # | exclusive | books | price50to100 | Deal of the day products go here, change every 15 minutes or so! |
        # | exclusive | electronics | priceUnder25 | Deal of the day products go here, change every 15 minutes or so! |
        # | exclusive | electronics | price25to50 | Deal of the day products go here, change every 15 minutes or so! |
        # | exclusive | electronics | price50to100 | Deal of the day products go here, change every 15 minutes or so! |


