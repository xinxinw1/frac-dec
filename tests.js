QUnit.test('decimal', function (assert){
  assert.iso(decimal(R.mknum("1"), R.mknum("1")), ["1", ""]);
  assert.iso(decimal(R.mknum("25"), R.mknum("5")), ["5", ""]);
  assert.iso(decimal(R.mknum("1"), R.mknum("1024")), ["0.0009765625", ""]);
  assert.iso(decimal(R.mknum("1"), R.mknum("625")), ["0.0016", ""]);
    
  assert.iso(decimal(R.mknum("1"), R.mknum("3")), ["0.", "3"]);
  assert.iso(decimal(R.mknum("1"), R.mknum("30")), ["0.0", "3"]);
  assert.iso(decimal(R.mknum("31"), R.mknum("30")), ["1.0", "3"]);
  assert.iso(decimal(R.mknum("1"), R.mknum("7")), ["0.", "142857"]);
  assert.iso(decimal(R.mknum("1"), R.mknum("11")), ["0.", "09"]);
  assert.iso(decimal(R.mknum("1"), R.mknum("110")), ["0.0", "09"]);
});
