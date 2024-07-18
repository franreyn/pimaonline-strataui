const vocabCardsWidgets: NodeListOf<HTMLElement> = document.querySelectorAll("vocab-cards-widget");

if (vocabCardsWidgets.length > 0) {
  // Add aria attributes to ul.vocab-cards
  vocabCardsWidgets.forEach((vocabCardsWidget: HTMLElement) => {
    vocabCardsWidget.setAttribute("role", "region");
    vocabCardsWidget.setAttribute("aria-label", "vocabulary list");
    vocabCardsWidget.classList.add("vocab-cards-widget");

    const vocabGroups: NodeListOf<HTMLElement> = vocabCardsWidget.querySelectorAll("li,vocab-card");

    if (vocabGroups.length > 0) {
      // Add aria attributes to li.vocab
      vocabGroups.forEach((vocabGroup: HTMLElement) => {
        vocabGroup.setAttribute("role", "group");
        vocabGroup.setAttribute("aria-label", "vocabulary term and definition");
      })
    }
  })


}