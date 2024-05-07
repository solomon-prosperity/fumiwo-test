# Answer To Question 1A
>  Explain how you would trigger the "resized" function on every change in the size of the div "A".


To trigger the `resized` function whenever the size of the div "A" changes, I would use the `ResizeObserver API` and pass the `resized` function as a callback. Then, I would set the Resize Observer to observe the target element, which is the div "A".

The ResizeObserver reacts to changes in size of any of the observed elements, which in our case is the div "A", independent of what caused the change. This ensures that the `resized` function is called whenever the size of div "A" changes, allowing us to dynamically set the `landscape` and `portrait` images based on the size of the target element.