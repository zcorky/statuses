import { expect } from 'chai';
import fz from '@zcorky/fz';
import * as is from '@zcorky/is';
import * as fetch from 'node-fetch';

import { codes } from '../src/utils/codes';

describe('codes', () => {
  describe('Full Status Code', () => {

    it('with latest codes', async () => {
      const codesJSON = await getStatusCodes();
      expect(Object.keys(codes).length).to.be.equal(Object.keys(codesJSON).length);
    });
  });

  describe('Code Descript Matched', async () => {
    Object.keys(codes).map(key => {
      const value = codes[key];
      it(`expect ${key} = ${value}`, async () => {
        const codesJSON = await getStatusCodes();
        expect(value).to.be.equal(codesJSON[key]);
      });
    })
  });
});

let _codesJSON;
async function getStatusCodes() {
  if (_codesJSON) return _codesJSON;

  _codesJSON = await fz.get('https://raw.githubusercontent.com/jshttp/statuses/master/codes.json', {
    engine: fetch,
  }).json();

  if (!is.object(_codesJSON)) {
    throw new Error('fetch jshttp/statuses/master/codes.json failed for Github');
  }

  return _codesJSON;
}
