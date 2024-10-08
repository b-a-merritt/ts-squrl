import { SQURL } from '../builder';

describe('configuration', () => {
  test('no schema', () => {
    const query = new SQURL('User').select(['id']).query();
    const expected = 'SELECT "User".id FROM "User" ';
    expect(query.query).toEqual(expected);
  });

  test('pretty formatting', () => {
    const query = new SQURL('User', { pretty: true }).select(['id']).query();

    const expected = `SELECT
"User".id
FROM "User"
`;

    expect(query.query).toEqual(expected);
  });
});
