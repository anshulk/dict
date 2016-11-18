module.exports = {
  base_url : 'http://api.wordnik.com:80/v4/word.json/',
  api_key : '1e39c2a5e1870faf6be030d06b00cd2e8bc184afeb3a0aa3b',
  
  endpoints : {
    'def': 'definitions',
    'syn': 'relatedWords',
    'ant': 'relatedWords',
    'ex': 'examples',
    'word': 'wordOfTheDay',
    'random': 'randomWord'
  },
  
  
  params : {
    'def': {
      limit: 200,
      includeRelated: true,
      sourceDictionaries: 'all',
      useCanonical: false,
      includeTags: false
    },
  
    'syn': {
      useCanonical: false,
      relationTypes: 'synonyms',
      limitPerRelationshipType: 10
    },
  
    'ant': {
      useCanonical: false,
      relationTypes: 'synonyms',
      limitPerRelationshipType: 10
    },
  
    'ex': {
      includeDuplicates: false,
      useCanonical: false,
      skip: 0,
      limit: 5
    },
  
    'word': {},
  
    'random': {
      hasDictionaryDef: false,
      minCorpusCount: 0,
      maxCorpusCount: -1,
      minDictionaryCount: 1,
      maxDictionaryCount: -1,
      minLength: 5,
      maxLength: -1
    }
  }
}