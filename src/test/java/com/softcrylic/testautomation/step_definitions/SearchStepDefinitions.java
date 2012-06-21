package com.softcrylic.testautomation.step_definitions;

import java.net.MalformedURLException;
import java.net.URL;
import java.util.concurrent.TimeUnit;

import cucumber.annotation.After;
import cucumber.annotation.Before;
import cucumber.annotation.en.Given;
import cucumber.annotation.en.Then;
import cucumber.annotation.en.When;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import com.softcrylic.testautomation.pages.*;


public class SearchStepDefinitions {
    private WebDriver driver;
    private HomePage hp;
    private String entered_search_keyword;
    private SearchResultPage searchResultPage;
    
    @Before
    public void prepare() throws MalformedURLException {
    
    	
    	String url = "";
    	
    	/* REMOTE FIREFOX DRIVER CONFIG FOR RUNNING TESTS IN LOCAL GRID AND JENKINS 
    	url = "http://localhost:4444/wd/hub";
    	DesiredCapabilities capabillities = DesiredCapabilities.firefox();
    	//DesiredCapabilities capabillities = DesiredCapabilities.chrome();
    	capabillities.setCapability("platform", Platform.MAC);
    	capabillities.setCapability("version", "11");
    	driver = new RemoteWebDriver(new URL(url), capabillities);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS); */
        
        
    	
        /// REMOTE DRIVER CONFIG FOR RUNNING TESTS IN SAUCE LABS 
    	url = "http://softcrylic:57b9b4bd-8d14-482e-a600-3b1262ff2710@ondemand.saucelabs.com:80/wd/hub";
    	System.out.println("Running at: "+url);
    	DesiredCapabilities capabillities = DesiredCapabilities.chrome();
    	capabillities.setCapability("platform", Platform.MAC);
        capabillities.setCapability("name", "Search Feature");
        this.driver = new RemoteWebDriver(new URL(url),capabillities);
        driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
        capabillities.setCapability("record-video", false); 
    	 
   
    	//capabillities.setCapability("name", "Running via Jenkins. Testing on Sauce");
    	//if(url.contains("saucelabs")) 
        // capabillities.setCapability("version", "11");
    	// else
    	// capabillities.setCapability("version", "12.0");	
    	 //For firefox
    	 //DesiredCapabilities capabillities = DesiredCapabilities.firefox();
    	 //if(url.contains("saucelabs")) 
         //capabillities.setCapability("version", "11");
    	 //else
    	 //capabillities.setCapability("version", "12.0"); //Change the browser version here if running on local machine
    	 //For Windows XP
         //capabillities.setCapability("platform", Platform.XP);
         //For MAC
        
    }

    @After
    public void cleanUp() {
    	System.out.println("Count is: @cleanUp " + ++count);
        driver.close();
        try{
        	if(driver!=null) driver.quit();
        }catch(Exception ignore){}
    }

    // basic search feature
    @Given("^User is in home page$")
    public void prepareHomePage() {
       hp = new HomePage(driver);
    }

    @When("^Enter \"([^\"]*)\" in search field$")
    public void search1(String search_keyword) {
    	entered_search_keyword = search_keyword;
    	searchResultPage = hp.Search(search_keyword);
    }
    
    @Then("^Search results for entered keyword is displayed$")
    public void assertTheSearchResult1() throws Throwable {
    	driver = searchResultPage.ValidateSearchResults(driver, entered_search_keyword);
    }
    
    @Given("^Select a \"([^\"]*)\" to search$")
    public void Department_Selection(String department) throws Throwable {
    	hp.SelectADepartment(department);
    }
    
    @When("^Click Search$")
    public void Click_Go_button() throws Throwable {
      //implementation is in hp.Search(search_keyword);
    }
    
    private static int count =0;
}