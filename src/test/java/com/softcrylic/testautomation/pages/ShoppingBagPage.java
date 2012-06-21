package com.softcrylic.testautomation.pages;

import java.io.File;
import java.io.IOException;

import junit.framework.Assert;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;

public class ShoppingBagPage {
	private WebDriver driver;
	private boolean isShoppingBagPage = false;
	
	
	public ShoppingBagPage(WebDriver driver) {
		try {
			this.driver = driver;
			if (driver.getCurrentUrl().toLowerCase().contains("http://cart4.barnesandnoble.com") ){
				isShoppingBagPage = true;
			}
        } catch (RuntimeException e) {
        	throw new IllegalStateException("This is not barnesandnoble.com" + driver.getCurrentUrl());
        }
    }
	
	//PROPERTIES
	public boolean isShoppingBagPage(){
		return isShoppingBagPage;
	}
	
	public static WebElement ContinueCheckoutButton(WebDriver driver){
		return driver.findElement(By.className("continueCheckout"));
	}
	
	//ACTIONS
	public SignInPage ContinueCheckout() {
        try {	        	
        	ShoppingBagPage.ContinueCheckoutButton(driver).click();
        } catch (RuntimeException e) {
            takeScreenShot(e, "searchError");
        }
		return new SignInPage(driver);
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