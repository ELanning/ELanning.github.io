# Syntactical Duplication

DRY, or "Don't Repeat Yourself" mostly refers to business logic, and sometimes infrastructure logic. Business logic is things such as, "a free tier user can only have 10 dashboards". Infrastructure logic might be connection strings, queue deployment code, or how to generate an authentication token. Business and infrastructure logic can be encoded as a function, variable, or some other method. The important bit is that the "information" lives in one place. If it it is "repeated", maintainers might forget to update both locations.

However, there's another type of duplication: syntactic duplication. This is when a few lines of code may superficially share a few things. This came up recently when I was writing a simple Python script to clean up some data. The script spun-off a bunch of parallel processes. Each process would handle a chunk of the total files, and write to a local file with some ID. The below code would then combine all those sub-files together.

```python
# Concat files together.
concat_files_by_pattern(r"E:\data\Japanese\train-ocr-*", r"E:\data\Japanese\train-ocr-data.txt")
concat_files_by_pattern(r"E:\data\Japanese\test-ocr-*", r"E:\data\Japanese\test-ocr-data.txt")
concat_files_by_pattern(r"E:\data\Japanese\eval-ocr-*", r"E:\data\Japanese\eval-ocr-data.txt")

concat_files_by_pattern(r"E:\data\Korean\train-ocr-*", r"E:\data\Korean\train-ocr-data.txt")
concat_files_by_pattern(r"E:\data\Korean\test-ocr-*", r"E:\data\Korean\test-ocr-data.txt")
concat_files_by_pattern(r"E:\data\Korean\eval-ocr-*", r"E:\data\Korean\eval-ocr-data.txt")

concat_files_by_pattern(r"E:\data\Chinese\train-ocr-*", r"E:\data\Chinese\train-ocr-data.txt")
concat_files_by_pattern(r"E:\data\Chinese\test-ocr-*", r"E:\data\Chinese\test-ocr-data.txt")
concat_files_by_pattern(r"E:\data\Chinese\eval-ocr-*", r"E:\data\Chinese\eval-ocr-data.txt")
```

As we can see, we can compress this with a for-loop.

```python
for language in ["Japanese", "Korean", "Chinese"]:
    concat_files_by_pattern(fr"E:\data\{language}\train-ocr-*", fr"E:\data\{language}\train-ocr-data.txt")
    concat_files_by_pattern(fr"E:\data\{language}\test-ocr-*", fr"E:\data\{language}\test-ocr-data.txt")
    concat_files_by_pattern(fr"E:\data\{language}\eval-ocr-*", fr"E:\data\{language}\eval-ocr-data.txt")
```

Not bad. Let's go further.

```python
for language in ["Japanese", "Korean", "Chinese"]:
    for dataset in ["train", "test", "eval"]:
        concat_files_by_pattern(fr"E:\data\{language}\{dataset}-ocr-*", fr"E:\data\{language}\{dataset}-ocr-data.txt")
```

We've went from 9 lines of code to 3. Less code might be appealing, and it may look more aesthetically pleasing. People generally like patterns. But did we really make the code simpler, more maintainable, or more readable? We've traded 9 lines of code, but now we have a doubly nested for-loop, as well as string interpolation. This particular example still feels like an improvement, but reducing syntactical duplication isn't always an improvement. It has to be worked out in code review by multiple sets of eyes, and even then, it's still somewhat subjective.

Because DRY is abused so much, we've come up with comebacks such as "The Rule of Three", "WET code", "prefer duplication over the wrong abstraction", and many more. I wonder how many times those retorts were referring to syntactical duplication.
