(function(exports) {
  function testExistenceOfNote() {

    if (typeof Note === 'undefined') {
      throw new Error("Note is not a constructor function");
    };
  };

  function ChecksIfNoteTakesAnArgument() {
    var note = new Note('1')
    if (note.arguments === 0) {
      throw new Error("Incorrect number of arguments. Expected 1, got 0")
    };
  };

  function ChecksIfNoteOnlyTakesOneArgument() {
    var note = new Note('1', '2')
    if (note.arguments > 1) {
      throw new Error(`Incorrect number of arguments. Expected 1, got ${note.arguments}`)
    }
  }

  testExistenceOfNote();
  ChecksIfNoteTakesAnArgument();
  ChecksIfNoteOnlyTakesOneArgument();
})(this);
