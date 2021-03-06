
/*global describe, it, browser,require */

describe('Page summary', function () {
    'use strict';

    function clickTest(screenshotName, visibleComponents, done, screenWidth) {
        var result,
            common = require('../common');

        result = browser.url('/pagesummary/fixtures/test.full.html')
            .setValue('#screenshots-pagesummary-items', visibleComponents.join(','));

        common.compareScreenshot({
            browserResult: result,
            prefix: common.getPrefix(browser),
            screenshotName: ('pagesummary_' + screenshotName),
            selector: '#screenshots-pagesummary',
            done: done,
            screenWidth: screenWidth
        });
    }

    it('should match previous pagesummary screenshot when all components are present', function (done) {
        clickTest(
            'all',
            [
                'Title',
                'Subtitle',
                'Image',
                'Status',
                'KeyInfo',
                'Content',
                'Alert'
            ],
            done
        );
    });

    it('should match previous pagesummary screenshot when no image is present', function (done) {
        clickTest(
            'noimage',
            [
                'Title',
                'Subtitle',
                'Status',
                'KeyInfo',
                'Content',
                'Alert'
            ],
            done
        );
    });

    it('should match previous pagesummary screenshot when no subtitle is present', function (done) {
        clickTest(
            'nosubtitle',
            [
                'Title',
                'Image',
                'Status',
                'KeyInfo',
                'Content',
                'Alert'
            ],
            done
        );
    });

    it('should match previous pagesummary screenshot when no status is present', function (done) {
        clickTest(
            'nostatus',
            [
                'Title',
                'Subtitle',
                'Image',
                'KeyInfo',
                'Content',
                'Alert'
            ],
            done
        );
    });

    it('should match previous pagesummary screenshot when no key info is present', function (done) {
        clickTest(
            'nokeyinfo',
            [
                'Title',
                'Subtitle',
                'Image',
                'Status',
                'Content',
                'Alert'
            ],
            done
        );
    });

    it('should match previous pagesummary screenshot when no additional content is present', function (done) {
        clickTest(
            'nocontent',
            [
                'Title',
                'Subtitle',
                'Image',
                'Status',
                'KeyInfo',
                'Alert'
            ],
            done
        );
    });

    it('should match previous pagesummary screenshot when no alert is present', function (done) {
        clickTest(
            'noalert',
            [
                'Title',
                'Subtitle',
                'Image',
                'Status',
                'KeyInfo',
                'Content'
            ],
            done
        );
    });

    it('should match previous pagesummary screenshot when only image, title, and subtitle are present', function (done) {
        clickTest(
            'image_title_subtitle',
            [
                'Title',
                'Subtitle',
                'Image'
            ],
            done,
            [480, 1280]
        );
    });

});
