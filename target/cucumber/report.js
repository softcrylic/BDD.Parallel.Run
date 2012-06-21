$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('/Users/sundarsritharan/git/BDD.Parallel.Run/src/test/resources/com/softcrylic/testautomation/feature/search.feature');
formatter.feature({
  "id": "search",
  "tags": [
    {
      "name": "@search",
      "line": 1
    }
  ],
  "description": "In order to Find Right Products\nAs a Guest User\nI want Search Functionality",
  "name": "Search",
  "keyword": "Feature",
  "line": 2
});
formatter.scenario({
  "id": "search;basic-search",
  "description": "",
  "name": "Basic Search",
  "keyword": "Scenario",
  "line": 7,
  "type": "scenario"
});
formatter.step({
  "name": "User is in home page",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "Enter \"Acceptance Testing\" in search field",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "Click Search",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "Search results for entered keyword is displayed",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage()"
});
formatter.result({
  "duration": 28838084000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acceptance Testing",
      "offset": 7
    }
  ],
  "location": "SearchStepDefinitions.search1(String)"
});
formatter.result({
  "duration": 16637183000,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinitions.Click_Go_button()"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinitions.assertTheSearchResult1()"
});
formatter.result({
  "duration": 521853000,
  "status": "passed"
});
formatter.scenario({
  "id": "search;department-search;;2",
  "tags": [
    {
      "name": "@search",
      "line": 1
    }
  ],
  "description": "",
  "name": "Department Search",
  "keyword": "Scenario Outline",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "User is in home page",
  "keyword": "Given ",
  "line": 16
});
formatter.step({
  "name": "Select a \"Books\" to search",
  "keyword": "And ",
  "line": 17,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Enter \"Agile\" in search field",
  "keyword": "When ",
  "line": 18,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "Click Search",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "Search results for entered keyword is displayed",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage()"
});
formatter.result({
  "duration": 26962593000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Books",
      "offset": 10
    }
  ],
  "location": "SearchStepDefinitions.Department_Selection(String)"
});
formatter.result({
  "duration": 11774729000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Agile",
      "offset": 7
    }
  ],
  "location": "SearchStepDefinitions.search1(String)"
});
formatter.result({
  "duration": 10757231000,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinitions.Click_Go_button()"
});
formatter.result({
  "duration": 18000,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinitions.assertTheSearchResult1()"
});
formatter.result({
  "duration": 11569066000,
  "status": "passed"
});
formatter.scenario({
  "id": "search;department-search;;3",
  "tags": [
    {
      "name": "@search",
      "line": 1
    }
  ],
  "description": "",
  "name": "Department Search",
  "keyword": "Scenario Outline",
  "line": 25,
  "type": "scenario"
});
formatter.step({
  "name": "User is in home page",
  "keyword": "Given ",
  "line": 16
});
formatter.step({
  "name": "Select a \"DVDs\" to search",
  "keyword": "And ",
  "line": 17,
  "matchedColumns": [
    0
  ]
});
formatter.step({
  "name": "Enter \"Batman\" in search field",
  "keyword": "When ",
  "line": 18,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "Click Search",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "Search results for entered keyword is displayed",
  "keyword": "Then ",
  "line": 20
});
formatter.match({
  "location": "SearchStepDefinitions.prepareHomePage()"
});
formatter.result({
  "duration": 32099300000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DVDs",
      "offset": 10
    }
  ],
  "location": "SearchStepDefinitions.Department_Selection(String)"
});
formatter.result({
  "duration": 21385758000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Batman",
      "offset": 7
    }
  ],
  "location": "SearchStepDefinitions.search1(String)"
});
formatter.result({
  "duration": 13659424000,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinitions.Click_Go_button()"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
formatter.match({
  "location": "SearchStepDefinitions.assertTheSearchResult1()"
});
formatter.result({
  "duration": 545505000,
  "status": "passed"
});
});ntime.model.StepContainer.runStep(StepContainer.java:44)\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\n\tat cucumber.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:65)\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:20)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\n\tat cucumber.junit.FeatureRunner.run(FeatureRunner.java:72)\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:76)\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:36)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:60)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:229)\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:50)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:222)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:300)\n\tat cucumber.junit.Cucumber.run(Cucumber.java:81)\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\n\tat org.junit.runners.Suite.runChild(Suite.java:24)\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:231)\n\tat java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:441)\n\tat java.util.concurrent.FutureTask$Sync.innerRun(FutureTask.java:303)\n\tat java.util.concurrent.FutureTask.run(FutureTask.java:138)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.runTask(ThreadPoolExecutor.java:886)\n\tat java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:908)\n\tat java.lang.Thread.run(Thread.java:680)\nCaused by: java.lang.ClassCastException: org.openqa.selenium.remote.RemoteWebDriver cannot be cast to org.openqa.selenium.TakesScreenshot\n\tat com.softcrylic.testautomation.pages.CheckoutPage.takeScreenShot(CheckoutPage.java:268)\n\tat com.softcrylic.testautomation.pages.CheckoutPage.continueCheckout(CheckoutPage.java:210)\n\tat com.softcrylic.testautomation.step_definitions.CheckoutStepDefinitions.payByPhone(CheckoutStepDefinitions.java:129)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:39)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:25)\n\tat java.lang.reflect.Method.invoke(Method.java:597)\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\n\t... 34 more\n"
});
formatter.match({
  "location": "CheckoutStepDefinitions.Continue_checkout_without_entering_an_account()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "CheckoutStepDefinitions.Check_limited_changes_options_should_load()"
});
formatter.result({
  "status": "skipped"
});
});