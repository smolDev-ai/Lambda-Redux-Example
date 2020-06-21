
exports.up = function(knex) {
  return knex.schema.createTable("posts", tbl => {
      tbl.increments("id"),
      tbl.string("title").notNullable(),
      tbl.integer("author_id").references("id").inTable("users").onUpdate("CASCADE").onDelete("CASCADE"),
      tbl.text("body").notNullable(),
      tbl.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('posts')
};
