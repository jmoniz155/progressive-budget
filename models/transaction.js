const mongoose = require("mongoose");

const { Schema } = mongoose;
// create database transaction
const transactionSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: "Enter a name for transaction",
    },
    value: {
      type: Number,
      required: "Enter an amount",
    },
    date: {
      type: Date,
      default: Date.now,
    },
  }
);

const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;
