// <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
// function handleFiles(event) {
//   var files = event.target.files;
//   $("#src").attr("src", URL.createObjectURL(files[0]));
//   document.getElementById("audio").load();
// }
// document.getElementById("upload").addEventListener("change", handleFiles, false);

	function readFile(files) {
		var fileReader = new FileReader();
			fileReader.readAsArrayBuffer(files[0]);
			fileReader.onload = function(e) {
				playAudioFile(e.target.result);
				console.log(("Filename: '" + files[0].name + "'"), ( "(" + ((Math.floor(files[0].size/1024/1024*100))/100) + " MB)" ));
			}
	}
	function playAudioFile(file) {
		var context = new window.AudioContext();
			context.decodeAudioData(file, function(buffer) {
				var source = context.createBufferSource();
					source.buffer = buffer;
					source.loop = false;
					source.connect(context.destination);
					source.start(0);
			});
	}
