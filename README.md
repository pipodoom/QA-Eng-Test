# QA-Eng-Test

Hi Team,

This is my first attempt scipting something outside of Unity (or similar frameworks) on probably 15 years. Not sure if GitHub was even a thing yet.

Anyhoo, here she is- minus the testNG @before and @after additins. Just started reading the documentation yesterday. Looks pretty simple.

Couple things of note:
* I had wanted to create each test in a separate .js spec file, but was having a bit of trouble with the 'experimental' runallscripts (?) command
* Predefined user details, including search parameters for Time Report can be found in /cypresss/fixtures/config.JSON
* First time creating a Git repo- be kind.

Aside from that, just use `npx cypress open` in the root dir, select E2E Testing in the Cypress UI, then select Continue with Tests
