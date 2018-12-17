import { expect } from 'chai';

import status, { isRedirect, isEmpty, isRetry } from '../src';

describe('status', () => {
  describe('status', () => {
    it('number', async () => {
      expect(status(100)).to.be.equal(100);
      expect(status(101)).to.be.equal(101);
      expect(status(200)).to.be.equal(200);
      expect(status(201)).to.be.equal(201);
      expect(status(202)).to.be.equal(202);
      expect(status(204)).to.be.equal(204);
      expect(status(301)).to.be.equal(301);
      expect(status(302)).to.be.equal(302);
      expect(status(304)).to.be.equal(304);
      expect(status(400)).to.be.equal(400);
      expect(status(401)).to.be.equal(401);
      expect(status(403)).to.be.equal(403);
      expect(status(405)).to.be.equal(405);
      expect(status(408)).to.be.equal(408);
      expect(status(409)).to.be.equal(409);
      expect(status(413)).to.be.equal(413);
      expect(status(415)).to.be.equal(415);
      expect(status(500)).to.be.equal(500);
      expect(status(501)).to.be.equal(501);
      expect(status(502)).to.be.equal(502);
      expect(status(503)).to.be.equal(503);
      expect(status(504)).to.be.equal(504);

      // throw
      expect(() => status(104)).to.throw(/invalid status code: 104/);
      expect(() => status(209)).to.throw(/invalid status code: 209/);
      expect(() => status(309)).to.throw(/invalid status code: 309/);
      expect(() => status(419)).to.throw(/invalid status code: 419/);
      expect(() => status(430)).to.throw(/invalid status code: 430/);
      expect(() => status(512)).to.throw(/invalid status code: 512/);
    });

    it('string', async () => {
      expect(status('100')).to.be.equal(100);
      expect(status('101')).to.be.equal(101);
      expect(status('200')).to.be.equal(200);
      expect(status('201')).to.be.equal(201);
      expect(status('202')).to.be.equal(202);
      expect(status('204')).to.be.equal(204);
      expect(status('301')).to.be.equal(301);
      expect(status('302')).to.be.equal(302);
      expect(status('304')).to.be.equal(304);
      expect(status('400')).to.be.equal(400);
      expect(status('401')).to.be.equal(401);
      expect(status('403')).to.be.equal(403);
      expect(status('405')).to.be.equal(405);
      expect(status('408')).to.be.equal(408);
      expect(status('409')).to.be.equal(409);
      expect(status('413')).to.be.equal(413);
      expect(status('415')).to.be.equal(415);
      expect(status('500')).to.be.equal(500);
      expect(status('501')).to.be.equal(501);
      expect(status('502')).to.be.equal(502);
      expect(status('503')).to.be.equal(503);
      expect(status('504')).to.be.equal(504);

      // throw
      expect(() => status('104')).to.throw(/invalid status code: 104/);
      expect(() => status('209')).to.throw(/invalid status code: 209/);
      expect(() => status('309')).to.throw(/invalid status code: 309/);
      expect(() => status('419')).to.throw(/invalid status code: 419/);
      expect(() => status('430')).to.throw(/invalid status code: 430/);
      expect(() => status('512')).to.throw(/invalid status code: 512/);
    });

    it('description', async () => {
      expect(status('Continue')).to.be.equal(100);
      expect(status('Switching Protocols')).to.be.equal(101);
      expect(status('OK')).to.be.equal(200);
      expect(status('Created')).to.be.equal(201);
      expect(status('Accepted')).to.be.equal(202);
      expect(status('No Content')).to.be.equal(204);
      expect(status('Moved Permanently')).to.be.equal(301);
      expect(status('Found')).to.be.equal(302);
      expect(status('Not Modified')).to.be.equal(304);
      expect(status('Bad Request')).to.be.equal(400);
      expect(status('Unauthorized')).to.be.equal(401);
      expect(status('Forbidden')).to.be.equal(403);
      expect(status('Method Not Allowed')).to.be.equal(405);
      expect(status('Request Timeout')).to.be.equal(408);
      expect(status('Conflict')).to.be.equal(409);
      expect(status('Payload Too Large')).to.be.equal(413);
      expect(status('Unsupported Media Type')).to.be.equal(415);
      expect(status('Internal Server Error')).to.be.equal(500);
      expect(status('Not Implemented')).to.be.equal(501);
      expect(status('Bad Gateway')).to.be.equal(502);
      expect(status('Service Unavailable')).to.be.equal(503);
      expect(status('Gateway Timeout')).to.be.equal(504);

      // throw
      expect(() => status('unknown')).to.throw(/invalid status message: unknown/);
    });
  });

  describe('status codes for redirects', () => {
    it('300', () => {
      expect(isRedirect(300)).to.be.equal(true);
    });

    it('301', () => {
      expect(isRedirect(301)).to.be.equal(true);
    });

    it('302', () => {
      expect(isRedirect(302)).to.be.equal(true);
    });

    it('303', () => {
      expect(isRedirect(303)).to.be.equal(true);
    });

    it('305', () => {
      expect(isRedirect(305)).to.be.equal(true);
    });

    it('307', () => {
      expect(isRedirect(307)).to.be.equal(true);
    });

    it('308', () => {
      expect(isRedirect(308)).to.be.equal(true);
    });

    it('200', () => {
      expect(isRedirect(200)).to.be.equal(false);
    });
  });

  describe('status codes for empty bodies', () => {
    it('204', () => {
      expect(isEmpty(204)).to.be.equal(true);
    });

    it('205', () => {
      expect(isEmpty(205)).to.be.equal(true);
    });

    it('304', () => {
      expect(isEmpty(304)).to.be.equal(true);
    });

    it('200', () => {
      expect(isEmpty(200)).to.be.equal(false);
    });
  });

  describe('status codes for when you should retry the request', () => {
    it('502', () => {
      expect(isRetry(502)).to.be.equal(true);
    });

    it('503', () => {
      expect(isRetry(503)).to.be.equal(true);
    });

    it('504', () => {
      expect(isRetry(504)).to.be.equal(true);
    });

    it('200', () => {
      expect(isRetry(200)).to.be.equal(false);
    });
  });
});
