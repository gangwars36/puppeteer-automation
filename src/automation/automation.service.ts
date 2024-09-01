/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import * as puppeteer from 'puppeteer';

@Injectable()
export class AutomationService {
  @Cron('38 0 * * *')
  async clickButton(): Promise<void> {
    try {
      // Connect to the existing browser instance
      const browser = await puppeteer.connect({
        browserWSEndpoint: 'ws://127.0.0.1:9222/devtools/browser/<your-browser-id>',
      });

      // Use the first opened tab (page)
      const pages = await browser.pages();
      const page = pages.length > 0 ? pages[0] : await browser.newPage();
      // Set the viewport to full screen
      await page.setViewport({ width: 1920, height: 1080 });
      console.log('Using an existing browser instance and page.');

      // Navigate or interact with the page
      await page.goto('https://www.linkedin.com/in/sachin-gangwar36/', { waitUntil: 'networkidle2' });

      const button = await page.evaluateHandle(() => {
        const xpath = "//button[contains(@class, 'artdeco-button') and contains(., 'Follow')]";
        const result = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null);
        return result.singleNodeValue as HTMLElement;
      });

      if (button) {
        console.log('Button found! Clicking the button...');
        await page.evaluate((el: HTMLElement) => el.click(), button);
        console.log('Button clicked successfully!');
      } else {
        console.error('Button not found');
      }
    } catch (error) {
      console.error('Failed to click the button:', error);
    }
  }
}
