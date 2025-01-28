const { User } = require("../models");
const { signToken } = require("../utils/auth");

module.exports = {
  Query: {
    getSingleUser: async function (parent, args, context) {
      if (context?.user) {
        const foundUser = await User.findOne({
          _id: context.user._id,
        });

        if (!foundUser) {
          return null;
        }

        // res.json(foundUser);
        return foundUser;
      } else {
        return null;
      }
    },
  },
  Mutation: {
    createUser: async function (parent, args) {
      const user = await User.create({
        username: args.username,
        email: args.email,
        password: args.password
      });

      if (!user) {
        return null;
      }
      const token = signToken(user);
      // res.json({ token, user });
      return { token, user };
    },

    login: async function (parent, args) {
      const user = await User.findOne({
        $or: [{ username: args.username }, { email: args.email }],
      });
      if (!user) {
        return null;
      }

      const correctPw = await user.isCorrectPassword(args.password);

      if (!correctPw) {
        return null;
      }
      const token = signToken(user);
      // res.json({ token, user });
      return { token, user };
    },

    saveBook: async function (parent, args, context) {
      try {
        if (context?.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { savedBooks: args } },
            { new: true, runValidators: true }
          );
          return updatedUser;
        } else {
          return null;
        }
      } catch (err) {
        console.log(err);
        return null;
      }
    },

    deleteBook: async function (parent, args, context) {
      if (context?.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { bookId: args.bookId } } },
          { new: true }
        );
        if (!updatedUser) {
          return null;
        }
        return updatedUser;
      } else {
        return null;
      }
    },
  },
};
