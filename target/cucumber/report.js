$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('/Users/sundarsritharan/git/BDD.Parallel.Run/src/test/resources/com/softcrylic/testautomation/feature/stock.feature');
formatter.feature({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no",
  "description": "",
  "name": "It should be possible to search for places at the Norwegian Meteorological Institute, http://www.yr.no",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "it-should-be-possible-to-search-for-places-at-the-norwegian-meteorological-institute,-http://www.yr.no;locate-stockholm",
  "description": "",
  "name": "Locate Stockholm",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "I want to know the weather forecast for coming days",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I search for Stockholm",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I should be able to get a weather forecast for Stockholm",
  "keyword": "Then ",
  "line": 7
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage()"
});
formatter.result({
  "duration": 24200277000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stockholm",
      "offset": 13
    }
  ],
  "location": "SearchStepDefinitions.search(String)"
});
formatter.result({
  "duration": 8506589000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stockholm",
      "offset": 47
    }
  ],
  "location": "SearchStepDefinitions.assertTheSearchResult(String)"
});
formatter.result({
  "duration": 8667614000,
  "status": "passed"
});
});