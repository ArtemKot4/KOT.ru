export default function splitText(text: string, max_size: number = 50): string {
    let result = [];
        let line = "";
    
        for (let word of text.split(" ")) {
            if (line.length + word.length <= max_size) {
                line += word + " ";
            } else {
                result.push(line.trim());
                line = word + " ";
            }
        }
    
        if (line) {
            result.push(line.trim());
        }
    
        return result.join("\n");
};

export function getMaxTextLength(text: string): number {
    const splited = text.split("\n");

    let maxSize = 0;
    let resultIndex = 0;
  
    splited.forEach((value, index) => {
      if (value.length > maxSize) {
        maxSize = value.length;
        resultIndex = index;
      }
    });

    return maxSize;
}