revSubstr <- function(x, start, stop) {
  x <- strsplit(x, "")
  sapply(x, 
         function(x) paste(rev(rev(x)[start:stop]), collapse = ""), 
         USE.NAMES = FALSE)
}

stimuli <- function(word, colour){
  paste0(
    "<p id = 'contingency_stim', style = 'color: ",
    colour,
    "; font-size: 60pt;'>",
    word,
    "</p>"
  )
}


dat <- function(colour_index, word, colour, cor_responses, phase){
  paste0(
    '"data": {\n\t\t',
    '"word": "',
    word,
    '",\n\t\t "colour": "',
    colour,
    '",\n\t\t "cor_response": "',
    cor_responses[colour_index],
    '",\n\t\t "phase": "',
    phase,
    '",\n\t\t "stim_type": "',
    "Practice",
    '",\n\t},'
  )
}

json_entry <- function(word_index, colour_index, words, colours, cor_responses, phase){
  word<-words[word_index]
  colour<- colours[colour_index]
  
  make_stimuli<-stimuli(word, colour) #here

  data<-dat(colour_index, word, colour, cor_responses, phase)
  
  paste0(
    '{\n\t"stimulus":',
    '"',
    make_stimuli,
    '", \n\t',
    data,
    '\n},\n'
  )
  
}
