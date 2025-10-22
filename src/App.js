// A complete React Quiz App (mobile friendly) without TailwindCSS
// Uses basic CSS and React Hooks

import React, { useState, useEffect } from "react";
import "./App.css";

const rawQuestions = [
  
    {
      
    question: "Which of the following is true regarding learning in psychology?",
    options: [
      "Learning has not been an important topic in psychology",
      "Learning involves no change in the organism",
      "Learning focuses on how humans speak",
      "Learning can be defined in many ways"
    ],
    answer: "Learning can be defined in many ways"
  },
  {
    question: "Learning is seen as an effect attributed to an element in ___.",
    options: [
      "blood",
      "environment",
      "hormones",
      "none of the above"
    ],
    answer: "environment"
  },
  {
    question: "Non-associative learning refers to ___ in the intensity of a response as the result of the repeated presentation of a stimulus.",
    options: [
      "a decrease",
      "an increase",
      "no change",
      "none of the above"
    ],
    answer: "a decrease"
  },
  {
    question: "Which of the following is a type of learning style?",
    options: [
      "visual",
      "auditory",
      "kinesthetic",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    question: "'Psychology as the Behaviorist Views It' is the famous work of ___.",
    options: [
      "Sigmund Freud",
      "John Watson",
      "Albert Bandura",
      "Ivan Pavlov"
    ],
    answer: "John Watson"
  },
  {
    question: "The state of conscious incompetence may be valuable ___ of a learning experience.",
    options: [
      "at the start",
      "at the end",
      "in the middle",
      "throughout the process"
    ],
    answer: "at the start"
  },
  {
    question: "Adding to existing student knowledge is known as ___.",
    options: [
      "conceptual change",
      "conceptual pattern",
      "conceptual exploration",
      "conceptual growth"
    ],
    answer: "conceptual growth"
  },
  {
    question: "Deliberate practice involves the following, except ___.",
    options: [
      "attention",
      "rehearsal",
      "repetition",
      "forgetting"
    ],
    answer: "forgetting"
  },
  {
    question: "Students persist in the face of challenging tasks and process information more deeply when they adopt ___ goals.",
    options: [
      "performance",
      "insignificant",
      "mastery",
      "repetitive"
    ],
    answer: "mastery"
  },
  {
    question: "___ refers to a decrease in response rate while ___ refers to an increase in response rate.",
    options: [
      "sensitization, habituation",
      "meaningful learning, association",
      "habituation, sensitization",
      "association, meaningful learning"
    ],
    answer: "habituation, sensitization"
  },

  // Week 2
  {
    question: "According to constructivism, reality is determined by ___.",
    options: [
      "the experiences of the learner",
      "the blood type of the learner",
      "the future goals of the learner",
      "none of the above"
    ],
    answer: "the experiences of the learner"
  },
  {
    question: "Teachers and instructors who understand the constructivist learning theory understand that their students ___.",
    options: [
      "are all the same",
      "bring their own unique experiences",
      "do not demand much effort in the classroom",
      "are careless"
    ],
    answer: "bring their own unique experiences"
  },
  {
    question: "The domain of social constructivism is largely attributed to the work done by ___ by adding the focus on societal and peer influence on learning.",
    options: [
      "Jean Piaget",
      "Lev Vygotsky",
      "Sigmund Freud",
      "John Watson"
    ],
    answer: "Lev Vygotsky"
  },
  {
    question: "Which of the following is not a major type of learning described by behavioral psychology?",
    options: [
      "classical conditioning",
      "operant conditioning",
      "observational learning",
      "traditional learning"
    ],
    answer: "traditional learning"
  },
  {
    question: "Which of the following is true according to behaviorism?",
    options: [
      "all behaviors can be unlearned",
      "all behaviors are directed by one's parents",
      "all behaviors are fundamentally destructive in nature",
      "all behaviors are unobservable"
    ],
    answer: "all behaviors can be unlearned"
  },
  {
    question: "In ___ conditioning, presentation of unconditioned stimulus precedes the presentation of the conditioned stimulus.",
    options: [
      "backward",
      "delay",
      "trace",
      "simultaneous"
    ],
    answer: "backward"
  },
  {
    question: "Smiling and complimenting students for good performance is a type of _____.",
    options: [
      "negative punishment",
      "positive punishment",
      "negative reinforcement",
      "positive reinforcement"
    ],
    answer: "positive reinforcement"
  },
  {
    question: "Which of the following psychologists was instrumental in engendering the dramatic shift from behaviorism to cognitive theories?",
    options: [
      "Tolman",
      "Bruner",
      "Gestalt",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "IQ is a typical measurement for ___.",
    options: [
      "intelligence",
      "personality",
      "emotions",
      "classical learning"
    ],
    answer: "intelligence"
  },
  {
    question: "BBL deals with the concept of learning in a ___ context.",
    options: [
      "neuro-physiological",
      "cognitive",
      "social",
      "behavioral"
    ],
    answer: "neuro-physiological"
  },

  // Week 3
  {
    question: "Which of the following is true?",
    options: [
      "Human memory involves the ability to only preserve information",
      "Human memory involves the ability to only recover information",
      "Human memory involves the ability to neither preserve not recover information",
      "Human memory involves the ability to both preserve and recover information"
    ],
    answer: "Human memory involves the ability to both preserve and recover information"
  },
  {
    question: "___ refers to connections between the nerve cells",
    options: [
      "Storage",
      "Synapses",
      "Neuron",
      "Blood"
    ],
    answer: "Synapses"
  },
  {
    question: "In order to create a new memory, information must be changed into ___.",
    options: [
      "a usable form",
      "a long form",
      "a short form",
      "a visual form"
    ],
    answer: "a usable form"
  },
  {
    question: "The memory ___ process allows us to bring stored memories into conscious awareness.",
    options: [
      "storage",
      "retrieval",
      "encoding",
      "forgetting"
    ],
    answer: "retrieval"
  },
  {
    question: "Which of the following is not a major domain of cognition?",
    options: [
      "Judgment",
      "Attention",
      "Aggression",
      "Intelligence"
    ],
    answer: "Aggression"
  },
  {
    question: "Which of the following is not an assumption of the information processing view?",
    options: [
      "Information is processed in steps or stages",
      "There are limits on how much information can be processed",
      "The human information processing system is interactive",
      "Information processing is analogous to computer processing"
    ],
    answer: "There are limits on how much information can be processed"
  },
  {
    question: "___ refers to rote rehearsal of repetition",
    options: [
      "elaborative rehearsal",
      "maintenance rehearsal",
      "meaningful rehearsal",
      "none of the above"
    ],
    answer: "maintenance rehearsal"
  },
  {
    question: "___ presentations can enhance working memory capacity",
    options: [
      "multimodal",
      "unimodal",
      "one by one",
      "antimodal"
    ],
    answer: "multimodal"
  },
  {
    question: "Episodic and semantic memories are categorized under ___ memory",
    options: [
      "procedural",
      "structural",
      "phonemic",
      "declarative"
    ],
    answer: "declarative"
  },
  {
    question: "According to the neural network model, memory capacity depends on ___",
    options: [
      "complexity of the synapses",
      "sparseness of representations",
      "spatial and temporal correlations between memories",
      "all of the above"
    ],
    answer: "all of the above"
  },

  // Week 4
  {
    question: "Creative thinking is the ability to generate ___ ideas.",
    options: [
      "innovative",
      "unconventional",
      "useful",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    question: "___ are representative items within each concept.",
    options: [
      "Constructs",
      "Symbols",
      "Prototypes",
      "Categories"
    ],
    answer: "Prototypes"
  },
  {
    question: "A mental representation can take the form of a ___.",
    options: [
      "word",
      "image",
      "sound",
      "all of the given"
    ],
    answer: "all of the given"
  },
  {
    question: "Which of the following is true?",
    options: [
      "Thinking is a lower mental process",
      "Thinking is a sub-vocal talking",
      "Thinking is unrelated to problem solving",
      "We can only think in numbers or words"
    ],
    answer: "Thinking is a sub-vocal talking"
  },
  {
    question: "Cognitive architecture is a theory about the ___ that create a mind in natural or artificial systems.",
    options: [
      "structures",
      "facts",
      "images",
      "sounds"
    ],
    answer: "structures"
  },
  {
    question: "Bloom's Taxonomy is a system of hierarchical models (arranged in a hierarchical rank,) used to categorize ___ into varying levels of complexity.",
    options: [
      "learning objectives",
      "attention goals",
      "prototypes",
      "none of the above"
    ],
    answer: "learning objectives"
  },
  {
    question: "___ knowledge refers to knowledge of terminology and specific details.",
    options: [
      "Metacognitive",
      "Conceptual",
      "Kinesthetic",
      "Factual"
    ],
    answer: "Factual"
  },
  {
    question: "Choosing to skim subheadings of unimportant information to get to the information we need as a metacognitive skill is called ___.",
    options: [
      "Skimming",
      "Rehearsing",
      "Self-monitoring",
      "Modifying"
    ],
    answer: "Skimming"
  },
  {
    question: "___ refers to the ability to regulate your thoughts and set aside any personal biases to come to the best conclusion.",
    options: [
      "Self-regulation",
      "Openmindedness",
      "Observation",
      "Interpretation"
    ],
    answer: "Self-regulation"
  },
  {
    question: "___ method of solving problems refers to a rule that guarantees the solution to a problem",
    options: [
      "imagination",
      "trial and error",
      "analogy",
      "algorithm"
    ],
    answer: "algorithm"
  },

  // Week 5
  {
    question: "Motivation is seen as a ___ that drives and directs human behavior.",
    options: [
      "hormonal impulse",
      "mental impulse",
      "attention deficit",
      "judgment delay"
    ],
    answer: "mental impulse"
  },
  {
    question: "Which of the following is false regarding motivation?",
    options: [
      "Motivation is an internal process",
      "Motivation can be directly observed",
      "Motivation activates people's actions",
      "None of the above"
    ],
    answer: "Motivation can be directly observed"
  },
  {
    question: "Which of the following does not come under intrinsic motivation?",
    options: [
      "interests",
      "social pressure",
      "curiosity",
      "self-satisfaction"
    ],
    answer: "social pressure"
  },
  {
    question: "Doing something/behaving well because one feels pressure from within is called ___.",
    options: [
      "introjected regulation",
      "amotivation",
      "identified motivation",
      "None of the given"
    ],
    answer: "introjected regulation"
  },
  {
    question: "Which of the following is not a biological need/drive?",
    options: [
      "love",
      "food",
      "water",
      "oxygen"
    ],
    answer: "love"
  },
  {
    question: "___ theory suggests that people are motivated to take action in order to receive a reward.",
    options: [
      "incentive",
      "biological",
      "arousal",
      "goal setting"
    ],
    answer: "incentive"
  },
  {
    question: "The Arousal Theory of Motivation was first proposed by ___.",
    options: [
      "Hall",
      "Watson",
      "Bandura",
      "Murray"
    ],
    answer: "Murray"
  },
  {
    question: "___ theory is based on the assumption that our behavior is based on making a conscious choice from a set of possible alternative behaviors.",
    options: [
      "arousal",
      "expectancy",
      "drive",
      "goal setting"
    ],
    answer: "expectancy"
  },
  {
    question: "Which of the following is not an attribute of effective goal setting?",
    options: [
      "unrealistic goals",
      "specific goals",
      "time based goals",
      "assignable goals"
    ],
    answer: "unrealistic goals"
  },
  {
    question: "Maslow's hierarchy of needs consists of ___ tiers.",
    options: [
      "four",
      "three",
      "six",
      "five"
    ],
    answer: "five"
  },

  // Week 6
  {
    question: "___ is mainly responsible for popularizing emotional intelligence.",
    options: [
      "John Watson",
      "Daniel Goleman",
      "Sigmund Freud",
      "Albert Bandura"
    ],
    answer: "Daniel Goleman"
  },
  {
    question: "EQ is used to measure ___.",
    options: [
      "cognitive intelligence",
      "memory",
      "emotional intelligence",
      "attention"
    ],
    answer: "emotional intelligence"
  },
  {
    question: "Experts suggest that EQ is more important than IQ.",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "Being able to put words to feelings refers to ___.",
    options: [
      "emotional responsibility",
      "emotional cognition",
      "emotional attention",
      "emotional literacy"
    ],
    answer: "emotional literacy"
  },
  {
    question: "The first step in emotional intelligence is ___.",
    options: [
      "perceiving emotions accurately",
      "reasoning with emotions",
      "managing emotions",
      "dismissing emotions"
    ],
    answer: "perceiving emotions accurately"
  },
  {
    question: "According to nine-layer model pyramid, ___ lies at the bottom of the pyramid.",
    options: [
      "Emotional stimuli",
      "Self awareness",
      "Self management",
      "Transcendence"
    ],
    answer: "Emotional stimuli"
  },
  {
    question: "The mixed model by ___ claims that EQ is a combination of competencies, skills, and \"facilitators\" that contribute to how people express themselves, respond to challenges in their environment, and connect with others.",
    options: [
      "Watson",
      "Goleman",
      "Salovey and Mayer",
      "Bar-On"
    ],
    answer: "Bar-On"
  },
  {
    question: "The transfer of emotions from one person to another is called ___.",
    options: [
      "social effect",
      "emotional effect",
      "social contagion",
      "emotional contagion"
    ],
    answer: "emotional contagion"
  },
  {
    question: "Hochschild has given the concept of ___ using the example of flight attendants.",
    options: [
      "emotional indifference",
      "emotional difficulty",
      "emotional labor",
      "emotional literacy"
    ],
    answer: "emotional labor"
  },
  {
    question: "Review of literature shows that ___ is associated with increasing levels of burnout.",
    options: [
      "emotional intelligence",
      "deep acting",
      "surface acting",
      "emotional literacy"
    ],
    answer: "surface acting"
  },

  // Week 7
  {
    question: "Which of the following is false about learning according to Gagne's definition?",
    options: [
      "It is a change in human disposition",
      "It persists over a period of time",
      "It is simply ascribable to processes of growth",
      "None of the above"
    ],
    answer: "It is simply ascribable to processes of growth"
  },
  {
    question: "Manual or physical skills come under ___ component of Bloom's taxonomy.",
    options: [
      "Cognitive",
      "Affective",
      "Psychomotor",
      "Physical"
    ],
    answer: "Psychomotor"
  },
  {
    question: "Reflection, learning and education was explored by ___.",
    options: [
      "Carl Rogers",
      "John Watson",
      "Benjamin Bloom",
      "John Dewey"
    ],
    answer: "John Dewey"
  },
  {
    question: "The principles of ___ refer to how close in time two events must be for a bond to be formed.",
    options: [
      "behavior",
      "reinforcement",
      "repetition",
      "contiguity"
    ],
    answer: "contiguity"
  },
  {
    question: "___ gives information to learners about their success or failure concerning the task at hand.",
    options: [
      "Cognitive feedback",
      "Emotional feedback",
      "Reinforcement",
      "Physical feedback"
    ],
    answer: "Cognitive feedback"
  },
  {
    question: "The ___ orientation to learning has a quality of personal involvement—the whole person in both feeling and cognitive aspects being in the learning event.",
    options: [
      "behavioral",
      "cognitive",
      "humanistic",
      "social"
    ],
    answer: "humanistic"
  },
  {
    question: "Learning through play is ___ learning.",
    options: [
      "primary",
      "secondary",
      "passive",
      "active"
    ],
    answer: "active"
  },
  {
    question: "People with ___ learning style are prone to sorting their ideas after speaking, rather than thinking ideas through before.",
    options: [
      "logical",
      "solitary",
      "visual",
      "auditory"
    ],
    answer: "auditory"
  },
  {
    question: "Which of the following statements is false?",
    options: [
      "Effective instruction is static",
      "Effective instruction is eclectic",
      "Effective instruction is generative",
      "Effective instruction is interactive"
    ],
    answer: "Effective instruction is static"
  },
  {
    question: "In ADDIE model, I stand for ___.",
    options: [
      "instruction",
      "implementation",
      "integration",
      "induction"
    ],
    answer: "implementation"
  },

  // Week 8
  {
    question: "Pedagogy can be defined as a way of ___ any theoretical topic or academic subject.",
    options: [
      "forgetting",
      "teaching",
      "remembering",
      "memorizing"
    ],
    answer: "teaching"
  },
  {
    question: "Good pedagogy is about ___.",
    options: [
      "enabling self to be good at rote memorization",
      "eliciting responses that demonstrate understanding",
      "hampering cognitive development of learners",
      "None of the above"
    ],
    answer: "eliciting responses that demonstrate understanding"
  },
  {
    question: "Which of the following is a pedagogical approach in teaching?",
    options: [
      "inductive",
      "integrative",
      "instance-based",
      "intuitive"
    ],
    answer: "integrative"
  },
  {
    question: "According to the ___ approach, learners are the makers of meaning and knowledge.",
    options: [
      "solitary learning",
      "passive learning",
      "constructivist learning",
      "metalearning"
    ],
    answer: "constructivist learning"
  },
  {
    question: "Which of the following is false about inquiry-based learning?",
    options: [
      "is a form of passive learning",
      "includes problem-based learning",
      "generally used in small scale investigations",
      "starts by posing questions"
    ],
    answer: "is a form of passive learning"
  },
  {
    question: "The ___ model describes what effective teachers do in their classrooms to engage students in intellectually challenging work.",
    options: [
      "pedagogical",
      "systematic",
      "engagement",
      "intellectual"
    ],
    answer: "pedagogical"
  },
  {
    question: "In experiential learning, experiences are structured to require the student to ___.",
    options: [
      "take initiative",
      "make decisions",
      "be accountable for results",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    question: "The following are the roles of an instructor in experiential learning, except___.",
    options: [
      "setting suitable experiences",
      "posing problems",
      "supporting students",
      "blurring the boundaries"
    ],
    answer: "blurring the boundaries"
  },
  {
    question: "Kolb's experiential learning style theory is typically represented by a ___-stage learning cycle",
    options: [
      "three",
      "five",
      "four",
      "seven"
    ],
    answer: "four"
  },
  {
    question: "People with ___ learning style are hands-on learners, and rely on intuition over logic.",
    options: [
      "converging",
      "accommodating",
      "integrating",
      "emotional"
    ],
    answer: "accommodating"
  },

  // Week 9
  {
    question: "A ___ classroom is the changing face of learning.",
    options: [
      "digital",
      "closed",
      "passive",
      "none of the above"
    ],
    answer: "digital"
  },
  {
    question: "Which of the following is not a feature of e-learning?",
    options: [
      "accessibility",
      "teacher-centeredness",
      "social justice",
      "personalization"
    ],
    answer: "teacher-centeredness"
  },
  {
    question: "Which of the following is a synonym of e-learning?",
    options: [
      "audio-visual learning",
      "multimedia learning",
      "distance learning",
      "none of the above"
    ],
    answer: "none of the above"
  },
  {
    question: "In ___ e-learning course, the content is simple and comprises text, images, audio, power-point presentation and text questions.",
    options: [
      "simulation-based",
      "interactive",
      "powerpoint-driven",
      "text-driven"
    ],
    answer: "text-driven"
  },
  {
    question: "Recent thinking in cognitive psychology places the ___ firmly at the center of the learning experience.",
    options: [
      "computer",
      "parent",
      "teacher",
      "individual"
    ],
    answer: "individual"
  },
  {
    question: "Which of the following is true?",
    options: [
      "Learning depends on self-awareness",
      "Learning is social",
      "Learning is goal-oriented",
      "All of the above"
    ],
    answer: "All of the above"
  },
  {
    question: "Learners may multitask when engaging in an online course, which could be resulting in ___.",
    options: [
      "hyperfocus",
      "better retrieval",
      "shorter attention spans",
      "None of the given"
    ],
    answer: "shorter attention spans"
  },
  {
    question: "The brain can process ___ visual cues per hour!",
    options: [
      "36",
      "360",
      "3600",
      "36,000"
    ],
    answer: "36,000"
  },
  {
    question: "Our brain has approximately ___ neurons that send information to one another.",
    options: [
      "85 billion",
      "85 million",
      "85 lakhs",
      "85,000"
    ],
    answer: "85 billion"
  },
  {
    question: "___ is referring to learners' automatic performance on specific procedures with predetermined steps to be followed.",
    options: [
      "chaining",
      "automatization",
      "framing",
      "none of the above"
    ],
    answer: "chaining"
  },

  // Week 10
  {
    question: "The ___ Model for New Normal in Education has been designed by many educational institutions.",
    options: [
      "Pedagogical",
      "Readiness",
      "Instructional",
      "Systematic"
    ],
    answer: "Readiness"
  },
  {
    question: "The most critical factor that plays a significant role in the success of any remote learning program is the ___.",
    options: [
      "software used by teacher",
      "readiness of the participants",
      "personality of the teacher",
      "the quality of schooling"
    ],
    answer: "readiness of the participants"
  },
  {
    question: "The typical picture of a teacher being a ___ of knowledge to the students has been replaced.",
    options: [
      "absorber",
      "collector",
      "exploiter",
      "dispenser"
    ],
    answer: "dispenser"
  },
  {
    question: "What does today's teacher need to be successful in the classroom?",
    options: [
      "digital skills",
      "life skills",
      "communication skills",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    question: "Students who consider intelligence as a ___ entity tend to focus on their goals despite obstacles.",
    options: [
      "malleable",
      "rigid",
      "God-given",
      "unreliable"
    ],
    answer: "malleable"
  },
  {
    question: "___ feedback to students is important for learning.",
    options: [
      "clear",
      "explanatory",
      "timely",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    question: "Students tend to enjoy learning and have better outcomes when their motivation is more intrinsic than extrinsic.",
    options: [
      "False",
      "True"
    ],
    answer: "True"
  },
  {
    question: "Long term goals are also called ___ goals.",
    options: [
      "non urgent",
      "principal",
      "proximal",
      "distal"
    ],
    answer: "distal"
  },
  {
    question: "Which of the following is an example of a reward?",
    options: [
      "clapping",
      "giving money",
      "giving a compliment",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    question: "___ is a teaching approach that generates feedback students can use to improve their performance.",
    options: [
      "Assessment for performance",
      "Assessment for marks",
      "Assessment for rewards",
      "Assessment for learning"
    ],
    answer: "Assessment for learning"
  },

  // Week 11
  {
    question: "Social cognition is the cognitive processes that influence ___.",
    options: [
      "social schema",
      "social behavior",
      "social media",
      "none of the above"
    ],
    answer: "social behavior"
  },
  {
    question: "Smooth and adaptive social interactions depend on the recruitment of ___.",
    options: [
      "perception",
      "attention",
      "language",
      "all of the above"
    ],
    answer: "all of the above"
  },
  {
    question: "Which of the following abilities does not come under social cognition?",
    options: [
      "rote memory",
      "face processing",
      "joint attention",
      "moral reasoning"
    ],
    answer: "rote memory"
  },
  {
    question: "Social cognition develops primarily in old age.",
    options: [
      "True",
      "False"
    ],
    answer: "False"
  },
  {
    question: "A theory of mind refers to a person's ability to understand and think about the ___ of other people.",
    options: [
      "biological states",
      "mental states",
      "physical traits",
      "none of the above"
    ],
    answer: "mental states"
  },
  {
    question: "The ___ theory details the processes of observational learning and modeling, and the influence of self-efficacy on the production of behavior.",
    options: [
      "behavioral",
      "socio-emotional",
      "social-cognitive",
      "cognitive-emotional"
    ],
    answer: "social-cognitive"
  },
  {
    question: "___ processes account for the information that is selected for observation in the environment.",
    options: [
      "motivational",
      "production",
      "retention",
      "attentional"
    ],
    answer: "attentional"
  },
  {
    question: "Children become more aggressive when they observe aggressive or violent models.",
    options: [
      "True",
      "False"
    ],
    answer: "True"
  },
  {
    question: "The ___ model of observational learning involves real or fictional characters displaying behaviors in books, films, television programs, or online media.",
    options: [
      "symbolic",
      "live",
      "verbal instructional",
      "contextual"
    ],
    answer: "symbolic"
  },
  {
    question: "___ refers to the anticipated consequences of a person's behavior.",
    options: [
      "self-efficacy",
      "expectations",
      "intrinsic reinforcement",
      "extrinsic reinforcement"
    ],
    answer: "expectations"
  },

  // Week 12
  {
  question: "Sustainability in the context of environmental sustainability is ___.",
  options: [
    "multidimensional",
    "bidimensional",
    "unidimensional",
    "none of the given"
  ],
  answer: "unidimensional"
},
{
  question: "As discussed by the Brundtland commission, sustainable development was the solution to the problems of ___.",
  options: [
    "poor health",
    "recession",
    "poverty",
    "environmental degradation"
  ],
  answer: "environmental degradation"
},
{
  question: "Environmental sustainability focuses on the impacts of processes, products and services on ___.",
  options: [
    "biodiversity",
    "ocean environment",
    "air",
    "all of the above"
  ],
  answer: "all of the above"
},
{
  question: "Social entrepreneurship is defined as solving social problems using ___.",
  options: [
    "generational wealth",
    "market-based methods",
    "bank loans",
    "magical methods"
  ],
  answer: "market-based methods"
},
{
  question: "HESI stands for.",
  options: [
    "Health and Education Sustainability Initiative",
    "Higher Education Systematic Initiative",
    "Higher Education Sustainability Initiative",
    "none of the above"
  ],
  answer: "Higher Education Sustainability Initiative"
},
{
  question: "Universal primary and secondary education is an outcome target of ___.",
  options: [
    "SDG 1",
    "SDG 2",
    "SDG 3",
    "SDG 4"
  ],
  answer: "SDG 4"
},
{
  question: "___ is a target group for ESD for 2030 framework.",
  options: [
    "policymakers",
    "parents",
    "institutional leaders",
    "all of the above"
  ],
  answer: "all of the above"
},
{
  question: "Successful implementation of ESD requires a shift in focus to ___.",
  options: [
    "learning",
    "teaching",
    "exploiting",
    "reading"
  ],
  answer: "learning"
},
{
  question: "___ competency refers to the ability to reflect on one's own role in community and society.",
  options: [
    "self-awareness",
    "emotional",
    "normative",
    "anticipatory"
  ],
  answer: "self-awareness"
},
{
  question: "In 2021, the European Centre for the Development of Vocational Training published a skills forecast scenario on the likely employment and skills implications of the ___.",
  options: [
    "European Greenhouse Initiative",
    "European Green Deal",
    "European Green Agreement",
    "none of the above"
  ],
  answer: "European Green Deal"
}
    

  
];

function shuffle(array) {
  let currentIndex = array.length, randomIndex;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}
function App() {
  // -------------------
  // State Declarations
  // -------------------
  const [startTime, setStartTime] = useState(null);
  const [pastScores, setPastScores] = useState(() => JSON.parse(localStorage.getItem("quizScores")) || []);
  const [endTime, setEndTime] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizMode, setQuizMode] = useState("welcome");
  const [questionsCount, setQuestionsCount] = useState(20);
  const [showHint, setShowHint] = useState(false);

  // -------------------
  // Timer State
  // -------------------
  const [timeLeft, setTimeLeft] = useState(null);

  // -------------------
  // Effects
  // -------------------
  // Load scores
  useEffect(() => {
    const savedScores = localStorage.getItem("quizScores");
    if (savedScores) {
      setPastScores(JSON.parse(savedScores));
    }
  }, []);

  // Timer effect
  useEffect(() => {
    if (quizMode === "quiz" && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (quizMode === "quiz" && timeLeft === 0) {
      setShowResults(true);
      setEndTime(Date.now());
      setQuizMode("results");
    }
  }, [timeLeft, quizMode]);

  // -------------------
  // startQuiz Function
  // -------------------
  const startQuiz = (count = 20) => {
    const shuffledQuestions = shuffle([...rawQuestions]);
    setQuestions(shuffledQuestions.slice(0, count));
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
    setStartTime(Date.now());
    setEndTime(null);
    setQuizMode("quiz");
    setTimeLeft(600); // Start with 10 minutes
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === null) return;
    
    const correctAnswer = questions[currentQuestion].answer;
    const isAnswerCorrect = selectedOption === correctAnswer;
    
    setIsCorrect(isAnswerCorrect);
    setShowFeedback(true);
    
    setTimeout(() => {
      setShowFeedback(false);
      setUserAnswers([...userAnswers, selectedOption]);
      setSelectedOption(null);
      
      const next = currentQuestion + 1;
      if (next < questions.length) {
        setCurrentQuestion(next);
      } else {
        setShowResults(true);
        const end = Date.now();
        setEndTime(end);
        setQuizMode("results");
        
        const newEntry = {
          score: score + (isAnswerCorrect ? 1 : 0),
          total: questions.length,
          time: Math.round((end - startTime) / 1000),
          date: new Date().toLocaleString()
        };
        
        const updatedScores = [newEntry, ...pastScores];
        setPastScores(updatedScores);
        localStorage.setItem("quizScores", JSON.stringify(updatedScores));
      }
    }, 1500);
  };

  const restartQuiz = () => {
    setQuizMode("welcome");
  };

  const score = userAnswers.reduce((acc, ans, index) => {
    return ans === questions[index].answer ? acc + 1 : acc;
  }, 0);

  const wrongAnswers = questions.filter((q, i) => userAnswers[i] !== q.answer);

  // Calculate progress percentage
  const progressPercentage = (currentQuestion / questions.length) * 100;
  
  const renderQuizSection = () => {
    if (quizMode === "welcome") {
      return (
        <div className="welcome-screen">
          <h2>Welcome to Psychology of learning Quiz</h2>
          <p>Test your knowledge with questions on Psychology of learning Quiz</p>
          
          <div className="quiz-options">
            <div className="question-count">
              <h3>How many questions?</h3>
              <div className="count-buttons">
                <button 
                  className={questionsCount === 10 ? "selected" : ""} 
                  onClick={() => setQuestionsCount(10)}
                >
                  10
                </button>
                <button 
                  className={questionsCount === 20 ? "selected" : ""} 
                  onClick={() => setQuestionsCount(20)}
                >
                  20
                </button>
                <button 
                  className={questionsCount === 50 ? "selected" : ""} 
                  onClick={() => setQuestionsCount(50)}
                >
                  50
                </button>
                <button 
                  className={questionsCount === rawQuestions.length ? "selected" : ""} 
                  onClick={() => setQuestionsCount(rawQuestions.length)}
                >
                  All ({rawQuestions.length})
                </button>
              </div>
            </div>
            
            <button className="start-button" onClick={() => startQuiz(questionsCount)}>
              Start Quiz
            </button>
          </div>
          
          {pastScores.length > 0 && (
            <div className="past-scores-preview">
              <h3>Previous Best: {Math.max(...pastScores.map(score => (score.score/score.total) * 100)).toFixed(0)}%</h3>
              <p>You've taken this quiz {pastScores.length} times</p>
            </div>
          )}
        </div>
      );
    }
    
    if (quizMode === "quiz") {
      return (
        <div className="quiz-box">
          <div className="quiz-header">
            <div className="progress-container">
              <div 
                className="progress-bar" 
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="question-counter">
              Question {currentQuestion + 1} of {questions.length}
            </div>
          </div>
          
          {questions[currentQuestion] && (
            <div className={`question-container ${showFeedback ? (isCorrect ? "correct-feedback" : "incorrect-feedback") : ""}`}>
              <h2 className="question-text">{questions[currentQuestion].question}</h2>
              
              <div className="options-container">
                {questions[currentQuestion].options.map((opt) => (
                  <button
                    key={opt}
                    className={`option-button ${selectedOption === opt ? "selected" : ""}`}
                    onClick={() => handleOptionSelect(opt)}
                    disabled={showFeedback}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              
              {showFeedback && (
                <div className="feedback">
                  {isCorrect ? (
                    <div className="correct">Correct!</div>
                  ) : (
                    <div className="incorrect">
                      
                      <h>{questions[currentQuestion].answer} </h>
                    </div>
                  )}
                </div>
              )}
              
              {!showFeedback && (
                <div className="control-buttons">
                  <button 
                    className="hint-button"
                    onClick={() => setShowHint(!showHint)}
                  >
                    {showHint ? "Hide Hint" : "Need a Hint?"}
                  </button>
                  
                  <button
                    className={`submit-button ${selectedOption ? "active" : ""}`}
                    onClick={handleSubmitAnswer}
                    disabled={selectedOption === null}
                  >
                    Submit Answer
                  </button>
                </div>
              )}
              
              {showHint && (
                <div className="hint-box">
                    <h>{questions[currentQuestion].answer} </h>
                </div>
              )}
            </div>
          )}
        </div>
      );
    }
    
    if (quizMode === "results") {
      const percentage = (score / questions.length) * 100;
      let feedback;
      
      if (percentage >= 90) {
        feedback = "Outstanding! You're an expert in Conservation Economics!";
      } else if (percentage >= 70) {
        feedback = "Great job! You have a solid understanding of the subject.";
      } else if (percentage >= 50) {
        feedback = "Good effort! Keep learning to improve your knowledge.";
      } else {
        feedback = "You might want to review the material again.";
      }
      
      return (
        <div className="result-box">
          <div className="score-display">
            <div className="score-circle">
              <div className="score-number">{score}</div>
              <div className="score-total">/ {questions.length}</div>
            </div>
            <h2 className="score-percentage">{percentage.toFixed(1)}%</h2>
          </div>
          
          <p className="score-feedback">{feedback}</p>
          
          {startTime && endTime && (
            <p className="time-taken">
              Time Taken: {(() => {
                const totalSeconds = Math.round((endTime - startTime) / 1000); 
                const hours = Math.floor(totalSeconds / 3600);
                const minutes = Math.floor((totalSeconds % 3600) / 60);
                const seconds = totalSeconds % 60;
                return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
              })()}
            </p>
          )}
          
          {wrongAnswers.length > 0 && (
            <div className="wrong-answers">
              <h3>Questions to Review:</h3>
              <div className="wrong-answers-list">
                {wrongAnswers.map((q, i) => (
                  <div key={i} className="wrong-answer-item">
                    <div className="question">{q.question}</div>
                    <div className="answers">
                      <div className="user-answer">
                        Your Answer: <span className="incorrect">{userAnswers[questions.indexOf(q)]}</span>
                      </div>
                      <div className="correct-answer">
                        Correct Answer: <span className="correct">{q.answer}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="result-buttons">
            <button className="restart-button" onClick={restartQuiz}>
              Back to Menu
            </button>
            <button className="retry-button" onClick={() => startQuiz(questions.length)}>
              Try Again
            </button>
          </div>
          
          <div className="past-scores">
            <h3>Your History:</h3>
            <div className="scores-table">
              <div className="table-header">
                <div className="date-cell">Date</div>
                <div className="score-cell">Score</div>
                <div className="time-cell">Time</div>
              </div>
              {pastScores.slice(0, 5).map((entry, idx) => (
                <div key={idx} className="table-row">
                  <div className="date-cell">{entry.date}</div>
                  <div className="score-cell">{entry.score}/{entry.total} ({((entry.score/entry.total)*100).toFixed(0)}%)</div>
                  <div className="time-cell">{entry.time}s</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="quiz-app-container">
      <header>
        <h1>Psychology of learning Quiz</h1>
      </header>
      <main>
        {renderQuizSection()}
      </main>
      <footer>
        <p>Psychology of learning Quiz  </p>
        <div className="disclaimer">
        {/* <p><em>Note: This quiz was generated using ChatGPT for educational and revision purposes. We are not responsible for any incorrect answers. Please verify with official sources when in doubt.</em></p> */}
      </div>
      </footer>
      
    </div>
    
  );
}

export default App;