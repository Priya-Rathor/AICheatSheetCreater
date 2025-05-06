export const handleGenerate = async (topic,setResponse) => {
  
    try {
      const response = await fetch("http://127.0.0.1:8100/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "library_name": topic }),
      });
  
      const data = await response.json();
      console.log("data",data)
  
      if (response.ok) {
        setResponse(data.results[0]);
      } else {
        console.error("API Error:", data.error || data.detail);
        setResponse("❌ Failed to generate cheat sheet.");
      }
    } catch (error) {
      console.error("Network Error:", error);
      setResponse("❌ Network error. Try again.");
    } 
  };
  