import React, { useEffect, useState } from "react";
import "./goalDirectories.css"

function GoalDirectories({JSONString}) {

 return (
<textarea className="textBox" id="dynamic-textarea" rows="10" cols="50">
<script>
document.write(JSONString)
</script>
</textarea>
 );
}

export default GoalDirectories;