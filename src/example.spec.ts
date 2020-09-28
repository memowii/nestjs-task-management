// describe('my test', () => {
//   it('returns true', () => {
//     expect(true).toEqual(true);
//   });
// });

class FriendList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    console.log(`${name} is now a friend!`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);

    if (idx === -1) {
      throw new Error('Friend not found!');
    }

    this.friends.splice(idx, 1);
  }
}

// tests
describe('FriendList', () => {
  let friendList;

  beforeEach(() => {
    friendList = new FriendList();
  });

  it('initializes friends list', () => {
    expect(friendList.friends.length).toEqual(0);
  });

  it('adds a friend to the list', () => {
    friendList.addFriend('Ariel');
    expect(friendList.friends.length).toEqual(1);
  });

  it('announces friendship', () => {
    friendList.announceFriendship = jest.fn();

    expect(friendList.announceFriendship).not.toHaveBeenCalled();
    friendList.addFriend('Ariel');
    // expect(friendList.announceFriendship).toHaveBeenCalled();
    expect(friendList.announceFriendship).toHaveBeenCalledWith('Ariel');
  });

  describe('removeFriend', () => {
    it('removes a friend from the list', () => {
      friendList.addFriend('Ariel');
      expect(friendList.friends[0]).toEqual('Ariel');
      friendList.removeFriend('Ariel');
      expect(friendList.friends[0]).toBeUndefined();
    });

    it('throws an error as friend does not exist', () => {
      expect(() => friendList.removeFriend('Ariel')).toThrow(
        new Error('Friend not found!'),
      );
    });
  });
});
