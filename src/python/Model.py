import torch.nn as nn

class NeuralNet(nn.Module):
    def __init__(self, input_size:int, hidden_size:int, num_classes:int):
        super(NeuralNet, self).__init__()
        self.l1 = nn.Linear(input_size, hidden_size)
        self.l2 = nn.Linear(hidden_size, hidden_size)
        self.l3 = nn.Linear(hidden_size, num_classes)
        self.relu = nn.ReLU() # Rectified Linear Unit
    
    def forward(self, x):
        output = self.l1(x)
        output = self.relu(output)
        output = self.l2(output)
        output = self.relu(output)
        return   self.l3(output)
