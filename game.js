function startGame() {
  const words = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];

  words.sort(() => Math.random() - 0.5);

  const firstGuess = prompt(
    `Чему равнялся первый элемент массива?\n\n${words.join(", ")}`
  );
  const lastGuess = prompt(
    `Чему равнялся последний элемент массива?\n\n${words.join(", ")}`
  );

  const firstWord = words[0];
  const lastWord = words[words.length - 1];

  if (firstGuess === firstWord && lastGuess === lastWord) {
    alert(
      `Поздравляем! Вы правильно угадали оба слова:"${firstWord}" and "${lastWord}"!`
    );
  } else if (firstGuess === firstWord || lastGuess === lastWord) {
    alert("Вы были близки к победе!");
  } else {
    alert(
      `Извините, вы не угадали ни одно слово правильно. Первое слово было "${firstWord}" и последнее слово было "${lastWord}".`
    );
  }
}
