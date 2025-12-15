const handleSubmit = async () => {
  if (!subject || !message) {
    alert("Please fill in all fields");
    return;
  }

  try {
    await addDoc(collection(db, "helpTickets"), {
      subject,
      message,
      createdAt: serverTimestamp(),
    });
    alert("Your ticket has been submitted!");
    setSubject("");
    setMessage("");
  } catch (error) {
    console.log(error);
    alert("Error submitting ticket");
  }
};
