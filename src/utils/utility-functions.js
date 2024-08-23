import { upgradeAndParse } from '@vitessce/schemas';

export function validateConfig(nextConfig) {
    let upgradeSuccess;
    let failureReason;
    try {
      failureReason = upgradeAndParse(JSON.parse(nextConfig));
      upgradeSuccess = true;
    } catch (e) {
      upgradeSuccess = false;
      failureReason = e.message;
      console.error(e);
    }
    return [upgradeSuccess, failureReason];
}

export function sanitiseURLs(urls) {
    return urls
      .split(/;/)
      .map(url => url.trim())
      .filter(url => url.match(/^http/g));
  
}