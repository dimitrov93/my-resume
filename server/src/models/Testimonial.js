const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    review: {
      type: String,
    },
    avatar: {
        type: mongoose.Schema.Types.Mixed,
        required: true    
    },

  },
  { timestamps: true }
);

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

module.exports = Testimonial;