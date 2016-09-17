# Gnome_Hide_Clock
Gnome3 extension to hide the clock

**Hide_Clock** uses a very simple actor.hide, actor.show method. It works but I'm not sure if that's the correct way of doing it or not. Works with Move Clock extensions like Frippery Move Clock.

**Remove_Center_Clock** uses a more complex method of removing the actor and then reinserting it. This works as well but is position dependent the way I wrote it - it only works on a centered clock.


**Remove_Right_Clock** uses a more complex method of removing the actor and then reinserting it. This works as well but is position dependent the way I wrote it - it would only work on a right aligned clock. I wrote it specifically for CentOS 7 Gnome Classic desktop theme which has a right aligned clock. I'm pretty sure it doesn't work at all as I haven't tested it. 

