const sinon = require("sinon");
const proxyquire = require("proxyquire");
const UserDataHandler = require("../data_handlers/user_data_handler");
const { expect, assert } = require("chai");
const userDataHandler = new UserDataHandler();
const nock = require("nock");

describe("Verify user_data_handler.js", () => {
  it("should load users", async () => {
    const usersLoading = proxyquire.callThru(await userDataHandler.loadUsers());
    expect(usersLoading.length).to.be.greaterThan(0);
  });

  it("should not load users and return error", async () => {
    nock("http://localhost:3000").get("/users").replyWithError(404);
    await userDataHandler
      .loadUsers()
      .then()
      .catch((response) => {
        expect(response.toString()).to.contain(
          "Error: Failed to load users data: Error: 404"
        );
      });
  });

  it("should return email list", async () => {
    const usersEmailList = userDataHandler.getUserEmailsList();
    expect(usersEmailList).not.to.be.empty;
  });

  it("should return number of users", async () => {
    expect(userDataHandler.getNumberOfUsers()).to.equal(10);
  });

  it("should return true if user matches", async () => {
    expect(userDataHandler.isMatchingAllSearchParams({ id: 1 })).to.be.true;
  });

  it("should return false if user doesn't match", async () => {
    const fakeData = sinon.fake.returns({ name: "Leanne Graham" });
    expect(userDataHandler.isMatchingAllSearchParams(fakeData(), "1")).to.be
      .false;
  });

  it("should return error when user is not found", async () => {
    const fakeData = sinon.fake.returns({ name: "Tin Tin" });
    try {
      userDataHandler.findUsers(fakeData);
    } catch (error) {
      expect(error.toString()).to.contain("Error: No matching users found!");
    }
  });

  it("should return found user", async () => {
    expect(userDataHandler.findUsers({ id: 1 })).not.to.be.empty;
  });

  it("should return error when search parameters are not provided", async () => {
    try {
      userDataHandler.findUsers();
    } catch (error) {
      expect(error.toString()).to.contain(
        "Error: No search parameters provoded!"
      );
    }
  });

  it("should return 'No users loaded!' as this.users = []", async () => {
    userDataHandler.users = [];
    try {
      userDataHandler.getUserEmailsList();
    } catch (error) {
      expect(error.toString()).to.contain("Error: No users loaded!");
    }
  });

  it("should return error when user is not found as this.users = []", async () => {
    userDataHandler.users = [];
    try {
      userDataHandler.findUsers({ id: 1 });
    } catch (error) {
      expect(error.toString()).to.contain("Error: No users loaded!");
    }
  });
});
