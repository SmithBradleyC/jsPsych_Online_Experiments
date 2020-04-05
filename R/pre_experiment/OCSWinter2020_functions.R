revSubstr <- function(x, start, stop) {
  x <- strsplit(x, "")
  sapply(x, 
         function(x) paste(rev(rev(x)[start:stop]), collapse = ""), 
         USE.NAMES = FALSE)
}

stimuli <- function(file_name, i){
  file_name_wo_ext <- substr(file_name, 1, nchar(file_name)-4)
  paste0(
    '<audio src="audio/selected_audio_files/clips_to_use/',
    revSubstr(file_name, start = 1, stop = 14),
    '" id = "clip_',
    file_name_wo_ext,
    '"></audio><button id="audio_button_',
    file_name_wo_ext,
    '" onclick="ChangeColour(audio_button_',
    file_name_wo_ext,
    '); window.which_clicked = UpdateClicked(this.id,window.which_clicked);',
    'window.which_clicked = EnableButtons(window.which_clicked); PlaySound(clip_',
    file_name_wo_ext,
    ');" class="jspsych-btn" style="background-color: white;">Clip ',
    i,
    '</button>'
  )
}


dat <- function(selected_files, unique_id){
  ind <- which(selected_files$unique_id %in% unique_id)[1]
  paste0(
    '"data": {\n\t\t',
    '"age_group": "',
    selected_files$age_groups[ind],
    '",\n\t\t "gender": "',
    selected_files$child_gender[ind],
    '",\n\t\t "language": "',
    selected_files$language[ind],
    '",\n\t\t "unique_id": "',
    selected_files$unique_id[ind],
    '"\n\t}'
  )
}

json_entry <- function(selected_files, unique_id){
  baby_data <- selected_files[selected_files$unique_id %in% unique_id, ]
  
  all_stimuli <- ""
  
  for(i in 1:nrow(baby_data)){
    all_stimuli <- paste0(all_stimuli, stimuli(baby_data[i, ]$file_id, i))
    if(i == nrow(baby_data)/2){all_stimuli<-paste0(all_stimuli, "<br>")}
  }
  
  paste0(
    '{\n\t"stimulus":',
    "'",
    all_stimuli,
    "', \n\t",
    dat(selected_files, unique_id),
    '\n},\n'
  )
  
}
