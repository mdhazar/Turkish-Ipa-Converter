const turkishToIPA = function (word) {
    const turkishToIPAMap = {
      'a': 'a',
      'e': 'e',
      'ı': 'ɯ',
      'i': 'i',
      'o': 'o',
      'ö': 'œ',
      'u': 'u',
      'ü': 'y',
      'b': 'b',
      'c': 'dʒ', // Adjust based on specific Turkish pronunciation
      'ç': 'tʃ',
      'd': 'd',
      'g': 'ɡ',
      'ğ': 'ɰ', // This is a common approximation for the soft g in Turkish
      'h': 'h',
      'j': 'ʒ', // Adjust based on specific Turkish pronunciation
      'k': 'k',
      'l': 'l',
      'm': 'm',
      'n': 'n',
      'p': 'p',
      'r': 'ɾ',
      's': 's',
      'ş': 'ʃ',
      't': 't',
      'v': 'v',
      'y': 'j',
      'z': 'z',
    };
  
    let ipaTranscription = '';
  
    for (let i = 0; i < word.length; i++) {
      const letter = word[i].toLowerCase();
      const ipaEquivalent = turkishToIPAMap[letter];
  
      if (ipaEquivalent) {
        ipaTranscription += ipaEquivalent;
      } else {
        ipaTranscription += letter; // Keep non-mapped characters as they are
      }
    }
  
    return ipaTranscription;
  }
  
  function convertToIPA() {
    const inputWord = document.getElementById('inputWord').value;
    const ipaTranscription = turkishToIPA(inputWord);
    document.getElementById('result').innerText = `IPA transcription for "${inputWord}": ${ipaTranscription}`;
  }
  