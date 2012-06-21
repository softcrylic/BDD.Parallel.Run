package com.softcrylic.testautomation.pages;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;

import com.softcrylic.testautomation.pages.DepartmentPage;
import com.softcrylic.testautomation.pages.HomePage;
import com.softcrylic.testautomation.pages.SearchResultPage;

import java.io.File;
import java.io.IOException;
import java.util.List;

import junit.framework.Assert;

public class HomePage {
    private WebDriver driver; 

    public HomePage(WebDriver driver) {
        this.driver = driver;
		this.driver.get(HomePage.getURL());
		Assert.assertTrue(HomePage.getRedirectToURL().contains(driver.getCurrentUrl()));
    }

    
  //properties 
  	public static String getURL(){
  		return "http://www.bn.com";
  	}
  	public static String getRedirectToURL(){
  		return "http://www.barnesandnoble.com/";
  	}
  	public static WebElement getSearchBox(WebDriver driver){
  		return driver.findElement(By.id("search-input"));
  	}
  	public static WebElement getSearchButton(WebDriver driver){
  		return driver.findElement(By.id("quick-search-button"));
  	}
  	public static WebElement getTopNavMenu(WebDriver driver){
  		return driver.findElement(By.id("bn-nav-global"));
  	}
  	
  	//ACTIONS
  	public SearchResultPage Search(String search_keyword) {
          try {	        	
          	HomePage.getSearchBox(driver).clear();
  			HomePage.getSearchBox(driver).sendKeys(search_keyword);
  			HomePage.getSearchButton(driver).click();
  			Assert.assertTrue(driver.getTitle().toLowerCase().contains(search_keyword.toLowerCase()));
          } catch (RuntimeException e) {
              takeScreenShot(e, "searchError");
          }
  		return new SearchResultPage(driver);
      }
  	
  	public DepartmentPage SelectADepartment(String department_input) throws InterruptedException {
          try {
          	List<WebElement> topNavMenuItems = HomePage.getTopNavMenu(driver).findElements(By.tagName("li"));
  			for (WebElement li : topNavMenuItems) {
  				if (li.getText().equals(department_input)) {
  					WebElement anchor = li.findElement(By.tagName("a"));
  					anchor.click();	
  				    break;
  			    } 
  			}
          } catch (RuntimeException e) {
          	System.out.println("Department doesn't exsist");
              takeScreenShot(e, "searchError");
          }
          return new DepartmentPage(driver);
      }
  	
    private void takeScreenShot(RuntimeException e, String fileName) {
        File screenShot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
        try {
            FileUtils.copyFile(screenShot, new File(fileName + ".png"));
        } catch (IOException ioe) {
            throw new RuntimeException(ioe.getMessage(), ioe);
        }
        throw e;
    }
}