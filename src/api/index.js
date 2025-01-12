//src/api/index.jsw
export const fetchBooks = async () => {
  try {
    // Fetch data from the API endpoint (ensure it's the correct API URL)
    const response = await fetch('/api/books'); // Modify as needed

    if (!response.ok) {
      throw new Error(`Failed to fetch books: ${response.statusText}`);
    }

    // Parse and return the response as JSON
    return await response.json();
  } catch (error) {
    console.error('Error fetching books:', error);
    return []; // Return an empty array if there's an error
  }
};
