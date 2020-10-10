from pydub import AudioSegment
import subprocess
import shlex
from midi2audio import FluidSynth


name = 'piano'
sound = AudioSegment.from_mp3("./musicConv/media/" + name + '.mp3')
sound.export("./musicConv/media/" + name + ".wav", format="wav")

subprocess.call(shlex.split('./main ./musicConv/media/' + name + ".wav"))

FluidSynth().midi_to_audio('./output/' + name + '-1000-200-0-88-5-4.mid', './outputWav/' + name + '.wav')
