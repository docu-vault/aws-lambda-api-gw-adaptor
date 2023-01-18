variable layer_zip_filename {
  type = string
  description = "Name of the Zip file containin the lambda layer"
}

variable layer_name {
  type = string
  description = "Lambda layer name"
}

variable runtimes {
  type = list
  description = "List of compatible runtimes"
}