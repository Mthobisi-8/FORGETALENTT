import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import TAlent from "@/components/TalentSurvey";
import { Link } from "react-router-dom";



type Question = {
  id: number;
  text: string;
  options: string[];
};

const generalQuestions: Question[] = [
  {
    id: 1,
    text: "What is your primary area of interest in technology?",
    options: [
      "Software Development",
      "Cloud Computing",
      "Cybersecurity",
      "Data Science",
      "Digital Marketing",
    ],
  },
];

const questionSets: Record<string, Question[]> = {
  "Software Development": [
    { id: 2, text: "Which programming language do you prefer?", options: ["JavaScript", "Python", "Java", "C#", "Go"] },
    { id: 3, text: "Do you have experience with frontend or backend development?", options: ["Frontend", "Backend", "Full Stack", "No Experience"] },
    { id: 4, text: "Do you prefer visually appealing interfaces?", options: ["Yes", "No"] },
    { id: 5, text: "Do you prefer working behind the scenes or focusing on user experience?", options: ["Behind the Scene", "Visible User Interface"] },
  ],
  "Cloud Computing": [
    { id: 2, text: "Which cloud provider do you want to learn?", options: ["AWS", "Azure", "Google Cloud", "IBM Cloud"] },
    { id: 3, text: "Are you interested in cloud security?", options: ["Yes", "No"] },
    { id: 4, text: "Who handles the infrastucture in cloud computing?", options: ["Public Cloud", "Private Cloud" ,"Hybrid Cloud"] },
    { id: 5, text: "What level of infrastructure is needed to hand over the hardware and Software?", options: ["Infrastructure As A Service(Iaas) ", "Platform As A Service (Paas)","Software As A Service(Saas)"] },
 
  ],
  "Cybersecurity": [
    { id: 2, text: "Which area of cybersecurity interests you?", options: ["Ethical Hacking", "Network Security", "Forensics", "Compliance"] },
    { id: 3, text: "Do you have experience in cybersecurity?", options: ["Beginner", "Intermediate", "Advanced"] },
    { id: 4, text: "Do you have interest in the technology and problem solving?", options: ["Yes", "No"] },
    { id: 5, text: "Which concept  are you most comfortable working with?", options: ["Network", "Operating System"] },
 
  ],
  "Data Science": [
    { id: 2, text: "What aspect of data science interests you the most?", options: ["Machine Learning", "Data Analysis", "Big Data", "AI"] },
    { id: 3, text: "Which tool do you prefer?", options: ["Python", "R", "SQL", "Excel"] },
    { id: 4, text: "Are you comfortable with working with numbers and patterns??", options: ["Yes", "No"] },
    { id: 5, text: "Do you enjoy the idea of visualizing data?", options: ["Yes", "No"] },
 
  ],
  "Digital Marketing": [
    { id: 2, text: "Which area of digital marketing are you interested in?", options: ["SEO", "Social Media Marketing", "Content Marketing", "PPC Advertising"] },
    { id: 3, text: "Have you worked with any digital marketing tools?", options: ["Yes", "No"] },
    { id: 4, text: "Would you consider your selft a creative minded person?", options: ["Yes", "No"] },
    { id: 5, text: "Do you have a understanding of your target?", options: ["Yes", "No"] },
 
  ],
  
};

const courseRecommendations: Record<string, string[]> = {
  "Software Development": ["AWS Certified Developer", "Software development certifications", "Certified Scrum Developer", "C programming certificates"],
  "Cloud Computing": ["AWS Certified Solutions Architect", "Azure Fundamentals", "DevOps Specialist" ,"AWS Certified Cloud Practitioner"],
  "Cybersecurity": ["CompTIA Security+", "Ethical Hacking" ,"Certified Information Systems Auditor (CISA)" ,"Certified Information Systems Security Professional (CISSP)"],
  "Data Science": ["Data Analytics Fundamentals", "Machine Learning Basics" ,"Google's Data Analytics Professional Certificate" ,"IBM Data Science Professional Certificate" ,] ,
  "Digital Marketing": ["Digital Marketing Professional", "Social Media Marketing","Google Digital Marketing& E-commerce Professional","SEMrush Certification DIDM"],
};

const TalentSurvey = () => {
  const { toast } = useToast();
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>(generalQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleAnswer = (answer: string) => {
    const questionId = currentQuestions[currentQuestionIndex].id;
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));

    if (questionId === 1) {
     
      const selectedCategory = answer;
      const nextQuestions = questionSets[selectedCategory] || [];

      
      setCurrentQuestions([...generalQuestions, ...nextQuestions]);
      setCurrentQuestionIndex(1); // Move to first specialized question
    } else {
      
      if (currentQuestionIndex < currentQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        analyzeSurvey();
      }
    }
  };

  const analyzeSurvey = () => {
    const primaryInterest = answers[1]; // First question has id=1
    const recommendedCourses = courseRecommendations[primaryInterest] || [];

    setShowResults(true);
    toast({
      title: "Survey Complete!",
      description: "We've analyzed your responses and prepared you a list of international certificates you can obtain as part of the program.",
    });
  };

  if (showResults) {
    const primaryInterest = answers[1];
    const recommendedCourses = courseRecommendations[primaryInterest] || [];

    return (
      <Card className="w-full max-w-2xl mx-auto mt-8">
        <CardHeader>
          <CardTitle>Your Personalized Course Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <p className="text-lg">Based on your interests in {primaryInterest}, we recommend:</p>
            <ul className="list-disc pl-6 space-y-2">
              {recommendedCourses.map((course, index) => (
                <li key={index} className="text-white">{course}</li>
              ))}
            </ul>
            <Button className="mt-4 mr-32">
            <Link to="/courses">View Courses</Link>
            </Button>
            <Button
             onClick={() => {
             setAnswers({});
             setCurrentQuestions(generalQuestions);
             setCurrentQuestionIndex(0);
             setShowResults(false);
             }}
             className="mt-4"
>
  Take Another Assessment
</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8 border-2 border-pink-950 rounded-t rounded-2xl text-2xl">
      <CardHeader>
        <CardTitle className="text-sky-200 ">Forge Talent Survey</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="text-sm text-muted-foreground ">
            Question {currentQuestionIndex + 1} of {currentQuestions.length}
          </div>
          <h2 className="text-xl font-semibold text-sky-200">
            {currentQuestions[currentQuestionIndex].text}
          </h2>
          <RadioGroup onValueChange={handleAnswer} className="space-y-3 text-sky-200">
            {currentQuestions[currentQuestionIndex].options.map((option) => (
              <div key={option} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={option} />
                <Label htmlFor={option}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
};

export default TalentSurvey;
