FOR ASSIGNMENT: 

to run: 
Go to the project folder: cd <emmes-wildlife-sanctuary>
	3.	Install the dependencies: npm install
	4.	Start the app: npm run dev
	5.	Open your browser and go to http://localhost:3000 to see it in action!

This project is a React app called Emme’s Wildlife Sanctuary, where you can learn about endangered animals and their conservation status. It features a list of species with details like how many are left and why they’re endangered, and you can mark your favorite ones to keep track of them. It’s a simple, interactive way to raise awareness and inspire people to care about wildlife.

challenges: 
Figuring out how to toggle the favorite status for each animal was a bit tricky at first, but I used the useState hook and wrote a simple handleFavClick function that updates the favorites list without repeating code, which worked really well. Handling the JSON data for the animals was another challenge because I had to make sure everything was structured consistently so it worked smoothly with the React components, but once I formatted the file properly, mapping it into the app was pretty straightforward. Making the app look good on different devices took some effort too, but using CSS flexbox and grid and testing on various screen sizes helped a lot. Overall, working through these challenges helped me get a better handle on React state, JSON, and debugging. (This assignment also made me a little bit sad because of seeing how low some of the numbers were for some animals! sniff.)




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




