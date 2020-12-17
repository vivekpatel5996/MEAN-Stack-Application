const { mongoose } = require(".");

module.exports = mongoose => {

    var schema = mongoose.Schema(
        {
            title: String,
            description: String,
            published: Boolean
        },
        { timestamps: true }
    )

    schema.method("toJSON", function () {
        const { _v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
    })

    const Tutorial = mongoose.model("tutorial", schema);

    return Tutorial;
}